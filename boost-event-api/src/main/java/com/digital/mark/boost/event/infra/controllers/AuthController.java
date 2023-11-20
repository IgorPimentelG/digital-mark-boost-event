package com.digital.mark.boost.event.infra.controllers;

import com.digital.mark.boost.event.domain.entities.User;
import com.digital.mark.boost.event.infra.dtos.*;
import com.digital.mark.boost.event.infra.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	private AuthService service;
	
	@PostMapping("/sign-in")
	public ResponseEntity<AuthDto> signIn(@RequestBody @Valid LoginDto credentials) {
		var result = service.signIn(credentials);
		return ResponseEntity.ok(result);
	}

	@PostMapping("/sign-up")
	public ResponseEntity<User> signUp(@RequestBody @Valid CreateUserDto data) {
		var result = service.signUp(data);
		return ResponseEntity.ok(result);
	}
}
