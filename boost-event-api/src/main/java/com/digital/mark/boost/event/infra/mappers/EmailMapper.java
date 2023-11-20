package com.digital.mark.boost.event.infra.mappers;

import com.digital.mark.boost.event.domain.entities.Email;
import com.digital.mark.boost.event.infra.dtos.CreateEmailDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EmailMapper {
	
	EmailMapper INSTANCE = Mappers.getMapper(EmailMapper.class);
	
	@Mapping(target = "id", ignore = true)
	@Mapping(target = "event", ignore = true)
	Email parse(CreateEmailDto source);
}
