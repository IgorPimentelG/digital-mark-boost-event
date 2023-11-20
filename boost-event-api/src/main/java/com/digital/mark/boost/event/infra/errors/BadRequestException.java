package com.digital.mark.boost.event.infra.errors;

public class BadRequestException extends RuntimeException {
	public BadRequestException(String message) {
		super(message);
	}
}
