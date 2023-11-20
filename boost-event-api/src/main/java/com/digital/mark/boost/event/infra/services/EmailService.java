package com.digital.mark.boost.event.infra.services;

import com.digital.mark.boost.event.domain.entities.*;
import com.digital.mark.boost.event.infra.dtos.CreateEmailDto;
import com.digital.mark.boost.event.infra.errors.*;
import com.digital.mark.boost.event.infra.mappers.EmailMapper;
import com.digital.mark.boost.event.infra.repositories.EmailRepository;
import com.digital.mark.boost.event.main.configs.security.SecurityContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class EmailService {

	@Autowired
	private EmailRepository repository;
	
	@Autowired
	private EventService eventService;
	
	@Autowired
	private SecurityContext securityContext;
	
	private final EmailMapper mapper = EmailMapper.INSTANCE;
	
	public Email register(CreateEmailDto data, String eventId) {
		if (data == null) {
			log.warn("Email data is null.");
			throw new BadRequestException("Informe os dados do email para ser registrado.");
		}
		
		var event = eventService.findById(eventId);
		var email = mapper.parse(data);
		event.addEmail(email);
		email.setEvent(event);
		
		eventService.save(event);
		return repository.save(email);
	}
	
	public Email findById(String id) {
		var userId = securityContext.authenticatedUser().getId();
		var email = repository.findById(id, userId)
			.orElseThrow(() -> {
				log.warn("Email with id ({}) not found", id);
				return new NotFoundException("Email com id (" + id + ") não foi encontrado.");
			});
		
		log.info("Email with id ({}} was found", id);
		
		return email;
	}
	
	public List<Email> findAll() {
		var userId = securityContext.authenticatedUser().getId();
		var emails = repository.findAll(userId);
		
		log.info("Find all email");
		
		return emails;
	}
}
