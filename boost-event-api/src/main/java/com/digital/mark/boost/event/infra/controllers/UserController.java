package com.digital.mark.boost.event.infra.controllers;

import com.digital.mark.boost.event.domain.entities.User;
import com.digital.mark.boost.event.infra.dtos.UpdateUserDto;
import com.digital.mark.boost.event.infra.errors.BadRequestException;
import com.digital.mark.boost.event.infra.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PatchMapping("/v1/update/{id}")
	public ResponseEntity<User> update(
		@PathVariable("id") String id, 
		@RequestBody @Valid UpdateUserDto data
	) {
		var result = service.update(id, data);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/v1/find")
	public ResponseEntity<User> find(
		@RequestParam(value = "id", required = false) String id,
		@RequestParam(value = "email", required = false) String email
	) {
		User result = null;
		
		if (id != null) {
			result = service.findById(id);
		} else if (email != null) {
			result = service.findByEmail(email);
		} else {
			throw new BadRequestException("Informe o ID ou Email do usuário.");
		}
		
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/v1/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
		service.delete(id);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}
