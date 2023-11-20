package com.digital.mark.boost.event.main.configs.security;

import com.digital.mark.boost.event.domain.entities.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class SecurityContext {
	
	public User authenticatedUser() {
		var auth = SecurityContextHolder.getContext().getAuthentication();
		return (User) auth.getPrincipal();
	}
}
