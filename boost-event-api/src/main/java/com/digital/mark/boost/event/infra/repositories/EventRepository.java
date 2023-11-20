package com.digital.mark.boost.event.infra.repositories;

import com.digital.mark.boost.event.domain.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, String> {
	@Query("SELECT e FROM Event e WHERE e.id = :id AND e.user.id = :userId")
	Optional<Event> findById(@Param("id") String id, @Param("userId") String userId);
}
