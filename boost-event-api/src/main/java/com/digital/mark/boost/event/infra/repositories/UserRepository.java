package com.digital.mark.boost.event.infra.repositories;

import com.digital.mark.boost.event.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {}
