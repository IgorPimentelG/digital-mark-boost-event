package com.digital.mark.boost.event.infra.schedules;

import com.digital.mark.boost.event.domain.entities.Event;
import com.digital.mark.boost.event.domain.types.EventStatus;
import com.digital.mark.boost.event.infra.repositories.EventRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Slf4j
@Component
public class UpdateEventStatus {
		
	@Autowired
	private EventRepository repository;
	
	// Run every 30 minutes
	@Scheduled(fixedDelay = 1800000)
	public void doTask() {
		var now = LocalDateTime.now();

		List<Event> events = repository.findAll();
		events.forEach(event -> {
			if (event.getOccursAt().isBefore(now)) {
				event.setStatus(EventStatus.EXPIRED);
				repository.save(event);
			}
		});
		
		var formatter = new SimpleDateFormat("HH:mm:ss");
		log.info("{}: update event status", formatter.format(new Date()));
	}
}
