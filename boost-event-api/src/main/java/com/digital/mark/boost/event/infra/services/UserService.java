package com.digital.mark.boost.event.infra.services;

import com.digital.mark.boost.event.domain.entities.User;
import com.digital.mark.boost.event.infra.dtos.*;
import com.digital.mark.boost.event.infra.errors.*;
import com.digital.mark.boost.event.infra.mappers.UserMapper;
import com.digital.mark.boost.event.infra.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService implements UserDetailsService {
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private SecurityService securityService;
	
	@Autowired
	private PasswordEncoder encoder;
	
	private final UserMapper mapper = UserMapper.INSTANCE;
	
	public User create(CreateUserDto data) {
		if (data == null) {
			log.warn("User data is null");
			throw new BadRequestException("Informe seus dados para se registrar.");
		}
		
		var user = mapper.parse(data);
		user.setPassword(encoder.encode(data.password()));
		var entity = save(user);
		
		log.info("User with id ({}) has been created", entity.getId());
		
		return entity;
	}
	
	public User update(String id, UpdateUserDto data) {
		if (data == null) {
			log.warn("User data is null");
			throw new BadRequestException("Informe seus dados que deseja atualizar.");
		}
		
		if (!securityService.isOwner(id)) {
			throw new ForbiddenException();
		}
		
		var entity = findById(id);
		mapper.update(data, entity);
		
		if (data.password() != null) {
			entity.setPassword(encoder.encode(data.password()));
		}
		
		log.info("User with id ({}) has been updated", id);
		
		return save(entity);
	}
	
	public User findById(String id) {
		var user = repository.findById(id).orElseThrow(() -> {
			log.warn("User with id ({}) not found", id);
			return new NotFoundException("User with id (" + id + ") not found.");
		});
		
		log.info("User with id ({}) was found", id);
		
		return user;
	}
	
	public User findByEmail(String email) {
		var user = repository.findByEmail(email).orElseThrow(() -> {
			log.warn("User with email ({}) not found", email);
			return new NotFoundException("User with email (" + email + ") not found");
		});

		log.info("User with email ({}) was found", email);

		return user;
	}
	
	public void delete(String id) {
		if (!securityService.isOwner(id)) {
			throw new ForbiddenException();
		}
		
		var user = findById(id);
		repository.delete(user);
		
		log.info("User with id ({}) has been deleted", id);
	}
	
	public User save(User user) {
		return repository.save(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return findByEmail(username);
	}
}
