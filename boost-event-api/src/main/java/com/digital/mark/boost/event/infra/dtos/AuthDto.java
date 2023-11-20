package com.digital.mark.boost.event.infra.dtos;

import java.util.Date;

public record AuthDto(
	String accessToken,
	Date expiration
) {}
