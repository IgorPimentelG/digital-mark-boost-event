package com.digital.mark.boost.event.main.configs.security;

import com.digital.mark.boost.event.infra.services.TokenService;
import com.digital.mark.boost.event.infra.services.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;

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
			var subject = tokenService.validateToken(token);
			var user = userService.findByEmail(subject);
			var auth = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
			SecurityContextHolder.getContext().setAuthentication(auth);
		}
		
		filterChain.doFilter(request, response);
	}

	private String getToken(HttpServletRequest request) {
		String authHeader = request.getHeader("Authorization");
		return authHeader != null ? authHeader.replace("Bearer ", "").trim() : null;
	}
}
