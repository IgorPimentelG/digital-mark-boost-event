package com.digital.mark.boost.event.infra.services;

import com.digital.mark.boost.event.main.configs.security.SecurityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {

	@Autowired
	private SecurityContext securityContext;
	
	public boolean isOwner(String id) {
		var user = securityContext.authenticatedUser();
		return user.getId().equals(id);
	}
}
