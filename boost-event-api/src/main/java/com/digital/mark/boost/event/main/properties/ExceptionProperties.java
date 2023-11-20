package com.digital.mark.boost.event.main.properties;

import java.time.LocalDateTime;

public record ExceptionProperties(
	String message,
	int code,
	LocalDateTime timestamp
) {}
