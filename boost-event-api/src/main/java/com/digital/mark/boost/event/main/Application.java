package com.digital.mark.boost.event.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.digital.mark.boost.event.domain.entities")
@EnableJpaRepositories("com.digital.mark.boost.event.infra.repositories")
@ComponentScan({"com.digital.mark.boost.event.main", "com.digital.mark.boost.event.infra"})
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
