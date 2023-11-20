package com.digital.mark.boost.event.infra.dtos;

import jakarta.validation.constraints.Pattern;

public record UpdateUserDto(
	@Pattern(
		regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!])(?!.*\\s).{8,}$",
		message = "A senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, uma letra minúscula," +
			" um número e um caractere especial."
	)
	String password,

	@Pattern(
		regexp = "^\\(\\d\\d\\)\\s(\\d{5})-(\\d{4})$",
		message = "Informe o número do whatsapp no formato: (xx) xxxxx-xxxx."
	)
	String whatsapp
) {}
