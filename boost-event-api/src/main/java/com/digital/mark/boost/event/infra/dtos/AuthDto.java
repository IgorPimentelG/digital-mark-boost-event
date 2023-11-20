package com.digital.mark.boost.event.infra.dtos;

import java.util.Date;

public record AuthDto(
	String id,
	String name,
	String email,
	String accessToken,
	Date expiration
) {
	public AuthDto withId(String id) {
		return new AuthDto(id, name, email, accessToken, expiration);
	}

	public AuthDto withName(String name) {
		return new AuthDto(id, name, email, accessToken, expiration);
	}
}
