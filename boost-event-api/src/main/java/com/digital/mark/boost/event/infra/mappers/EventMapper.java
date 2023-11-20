package com.digital.mark.boost.event.infra.mappers;

import com.digital.mark.boost.event.domain.entities.Event;
import com.digital.mark.boost.event.infra.dtos.CreateEventDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EventMapper {
	
	EventMapper INSTANCE = Mappers.getMapper(EventMapper.class);
	
	@Mapping(target = "id", ignore = true)
	@Mapping(target = "status", ignore = true)
	@Mapping(target = "user", ignore = true)
	Event parse(CreateEventDto source);
}
