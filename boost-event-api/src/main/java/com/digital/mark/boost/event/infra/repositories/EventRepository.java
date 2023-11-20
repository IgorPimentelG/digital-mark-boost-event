package com.digital.mark.boost.event.infra.repositories;

import com.digital.mark.boost.event.domain.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, String> {}
