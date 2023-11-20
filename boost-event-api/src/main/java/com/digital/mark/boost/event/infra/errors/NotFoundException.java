package com.digital.mark.boost.event.infra.errors;

public class NotFoundException extends RuntimeException {
	public NotFoundException(String message) {
		super(message);
	}
}
