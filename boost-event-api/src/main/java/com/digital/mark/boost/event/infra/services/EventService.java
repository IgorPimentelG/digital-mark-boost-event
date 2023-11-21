package com.digital.mark.boost.event.infra.services;

import com.digital.mark.boost.event.domain.entities.Event;
import com.digital.mark.boost.event.domain.types.EventStatus;
import com.digital.mark.boost.event.infra.dtos.CreateEventDto;
import com.digital.mark.boost.event.infra.dtos.EventsDto;
import com.digital.mark.boost.event.infra.errors.*;
import com.digital.mark.boost.event.infra.mappers.EventMapper;
import com.digital.mark.boost.event.infra.repositories.EventRepository;
import com.digital.mark.boost.event.main.configs.security.SecurityContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class EventService {

	@Autowired
	private EventRepository repository;
	
	@Autowired
	private SecurityContext securityContext;
	
	@Autowired
	private UserService userService;
	
	private final EventMapper mapper = EventMapper.INSTANCE;
	
	public Event register(CreateEventDto data) {
		if (data == null) {
			log.warn("Event data is null");
			throw new BadRequestException("Informe os dados do evento para ser registrado.");
		}
		
		var user = securityContext.authenticatedUser();
		var event = mapper.parse(data);
		event.setUser(user);
		user.addEvent(event);
				
		userService.save(user);
		return save(event);
	}
	
	public Event findById(String id) {
		var user = securityContext.authenticatedUser();
		var event = repository.findById(id, user.getId())
			.orElseThrow(() -> {
				log.warn("Event with id ({}) not found", id);
				return new NotFoundException("Evento com id (" + id + ") não foi encontrado.");
			});
		
		log.info("Event with id ({}) was found", id);

		return event;
	}
	
	public EventsDto findAll() {
		var user = securityContext.authenticatedUser();
		var events = user.getEvents();
		List<Event> inProgress = new ArrayList<>();
		List<Event> expired = new ArrayList<>();
		
		events.forEach(event -> {
			if (event.getStatus() == EventStatus.IN_PROGRESS) {
				inProgress.add(event);
			} else {
				expired.add(event);
			}
		});
		
		log.info("Find all events");
		
		return new EventsDto(inProgress, expired);
	}
		
	public Event save(Event event) {
		return repository.save(event);
	}
}
