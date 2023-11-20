package com.digital.mark.boost.event.infra.mappers;

import com.digital.mark.boost.event.domain.entities.User;
import com.digital.mark.boost.event.infra.dtos.CreateUserDto;
import com.digital.mark.boost.event.infra.dtos.UpdateUserDto;
import com.digital.mark.boost.event.infra.dtos.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.mapstruct.factory.Mappers;

@Mapper(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface UserMapper {
	
	UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
	
	@Mapping(target = "id", ignore = true)
	User parse(CreateUserDto source);
	
	UserDto parse(User source);
	
	void update(UpdateUserDto source, @MappingTarget User user);
}
