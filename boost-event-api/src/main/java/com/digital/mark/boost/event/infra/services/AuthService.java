package com.digital.mark.boost.event.infra.services;

import com.digital.mark.boost.event.domain.entities.User;
import com.digital.mark.boost.event.infra.dtos.*;
import com.digital.mark.boost.event.infra.errors.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

	@Autowired
	private UserService userService;
	
	@Autowired
	private TokenService tokenService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	public AuthDto signIn(LoginDto credentials) {
		try {
			var auth = new UsernamePasswordAuthenticationToken(credentials.email(), credentials.password());
			authenticationManager.authenticate(auth);
			
			var user = userService.findByEmail(credentials.email());
			var token =  tokenService.createToken(credentials.email());
			
			return token.withId(user.getId()).withName(user.getName());
		} catch (Exception e) {
			throw new UnauthorizedException();
		}
	}
	
	public User signUp(CreateUserDto data) {
		return userService.create(data);
	}
}
