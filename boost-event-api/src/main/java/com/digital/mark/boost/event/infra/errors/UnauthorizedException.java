package com.digital.mark.boost.event.infra.errors;

public class UnauthorizedException extends RuntimeException {
	public UnauthorizedException() {
		super("Você não tem permissão para acessar o sistema.");
	}
}
