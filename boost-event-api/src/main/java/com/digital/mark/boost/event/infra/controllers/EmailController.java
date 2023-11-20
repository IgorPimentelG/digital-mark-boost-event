package com.digital.mark.boost.event.infra.controllers;

import com.digital.mark.boost.event.domain.entities.Email;
import com.digital.mark.boost.event.infra.dtos.CreateEmailDto;
import com.digital.mark.boost.event.infra.services.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/email")
public class EmailController {
	
	@Autowired
	private EmailService service;
	
	@PostMapping("/v1/register")
	public ResponseEntity<Email> register(
		@RequestBody @Valid CreateEmailDto data,
		@RequestParam("eventId") String eventId
	) {
		var result = service.register(data, eventId);
		return ResponseEntity.status(HttpStatus.CREATED).body(result);
	}
	
	@GetMapping("/v1/find/{id}")
	public ResponseEntity<Email> find(@PathVariable("id") String id) {
		var result = service.findById(id);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/v1/list")
	public ResponseEntity<List<Email>> findAll() {
		var result = service.findAll();
		return ResponseEntity.ok(result);
	}
}
