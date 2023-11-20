package com.digital.mark.boost.event.main.configs;

import com.digital.mark.boost.event.main.properties.TokenProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PropertiesConfig {

	@Bean
	@ConfigurationProperties(prefix = "security.jwt")
	public TokenProperties tokenConfig() {
		return new TokenProperties();
	}
}
