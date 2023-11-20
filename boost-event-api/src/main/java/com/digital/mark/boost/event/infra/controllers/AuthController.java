package com.digital.mark.boost.event.infra.controllers;

import com.digital.mark.boost.event.infra.dtos.*;
import com.digital.mark.boost.event.infra.mappers.UserMapper;
import com.digital.mark.boost.event.infra.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	private AuthService service;
	
	private final UserMapper mapper = UserMapper.INSTANCE;
	
	@PostMapping("/sign-in")
	public ResponseEntity<AuthDto> signIn(@RequestBody @Valid LoginDto credentials) {
		var result = service.signIn(credentials);
		return ResponseEntity.ok(result);
	}

	@PostMapping("/sign-up")
	public ResponseEntity<UserDto> signUp(@RequestBody @Valid CreateUserDto data) {
		var result = service.signUp(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(mapper.parse(result));
	}
}
