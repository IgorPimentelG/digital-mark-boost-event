package com.digital.mark.boost.event.main.properties;

import java.util.Date;

public record ExceptionProperties(
	String message,
	int code,
	Date timestamp
) {}
