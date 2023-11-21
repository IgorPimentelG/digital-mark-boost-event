package com.digital.mark.boost.event.infra.repositories;

import com.digital.mark.boost.event.domain.entities.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmailRepository extends JpaRepository<Email, String> {
	@Query("SELECT e FROM Email e INNER JOIN e.event ev WHERE ev.user.id = :userId AND e.id = :id")
	Optional<Email> findById(@Param("id") String id, @Param("userId") String userId);
	
	@Query("SELECT e FROM Email e INNER JOIN e.event ev WHERE ev.user.id = :userId AND ev.id = :eventId")
	List<Email> findAll(@Param("userId") String userId, @Param("eventId") String eventId);
}