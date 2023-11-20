package com.digital.mark.boost.event.main.configs.security;

import com.digital.mark.boost.event.infra.services.*;
import com.digital.mark.boost.event.main.properties.ExceptionProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

@Component
public class SecurityFilter extends OncePerRequestFilter {

	@Autowired
	private TokenService tokenService;
	
	@Autowired
	private UserService userService;
	
	@Override
	protected void doFilterInternal(
		@NonNull HttpServletRequest request,
		@NonNull HttpServletResponse response,
		@NonNull FilterChain filterChain
	) throws ServletException, IOException {
		
		var token = getToken(request);
		
		if (token != null) {
			try {
				var subject = tokenService.validateToken(token);
				var user = userService.findByEmail(subject);
				var auth = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
				SecurityContextHolder.getContext().setAuthentication(auth);
			} catch (Exception e) {
				handleDefaultException(response);
				return;
			}
		}
		
		filterChain.doFilter(request, response);
	}

	private String getToken(HttpServletRequest request) {
		String authHeader = request.getHeader("Authorization");
		return authHeader != null ? authHeader.replace("Bearer ", "").trim() : null;
	}
	
	private void handleDefaultException(HttpServletResponse response) throws IOException {
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		var exception = new ExceptionProperties(
			"Token de acesso fornecido está inválido ou expirou.",
			401,
			new Date()
		);
		new ObjectMapper().writeValue(response.getWriter(), exception);
	}
}
