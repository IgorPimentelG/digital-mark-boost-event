package com.digital.mark.boost.event.infra.dtos;

import com.digital.mark.boost.event.domain.entities.Event;

import java.util.List;

public record EventsDto(
	List<Event> inProgress,
	List<Event> expired
) {}
