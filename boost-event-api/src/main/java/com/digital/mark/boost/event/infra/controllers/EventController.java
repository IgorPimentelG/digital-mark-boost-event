package com.digital.mark.boost.event.infra.controllers;

import com.digital.mark.boost.event.domain.entities.Event;
import com.digital.mark.boost.event.infra.dtos.CreateEventDto;
import com.digital.mark.boost.event.infra.dtos.EventsDto;
import com.digital.mark.boost.event.infra.services.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event")
public class EventController {
	
	@Autowired
	private EventService service;
	
	@PostMapping("/v1/register")
	public ResponseEntity<Event> register(@RequestBody @Valid CreateEventDto data) {
		var result = service.register(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(result);
	}
	
	@GetMapping("/v1/find/{id}")
	public ResponseEntity<Event> findById(@PathVariable("id") String id) {
		var result = service.findById(id);
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/v1/list")
	public ResponseEntity<EventsDto> findAll() {
		var result = service.findAll();
		return ResponseEntity.ok(result);
	}
}
