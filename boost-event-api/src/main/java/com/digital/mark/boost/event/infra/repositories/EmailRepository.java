package com.digital.mark.boost.event.infra.repositories;

import com.digital.mark.boost.event.domain.entities.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends JpaRepository<Email, String> {}
