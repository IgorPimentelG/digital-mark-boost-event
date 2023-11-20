package com.digital.mark.boost.event.infra.errors;

public class ForbiddenException extends RuntimeException {
	public ForbiddenException() {
		super("Você não tem permissão para acessar este recurso no momento.");
	}
}
