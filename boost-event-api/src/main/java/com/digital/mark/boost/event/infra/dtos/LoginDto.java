package com.digital.mark.boost.event.infra.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginDto(
	@NotBlank(message = "Informe o seu e-mail.")
	@Email(message = "Informe um e-mail válido.")
	String email,

	@NotBlank(message = "Informe sua senha.")
	String password
) {}
