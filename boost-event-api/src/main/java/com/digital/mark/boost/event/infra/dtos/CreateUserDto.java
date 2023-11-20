package com.digital.mark.boost.event.infra.dtos;

import jakarta.validation.constraints.*;

public record CreateUserDto(
	@NotBlank(message = "Informe o seu nome.")
	@Size(max = 255, message = "Informe o nome com no máximo 255 caracteres.")
	String name,
	
	@NotBlank(message = "Informe o seu e-mail.")
	@Email(message = "Informe um e-mail válido.")
	String email,

	@NotBlank(message = "Informe sua senha.")
	@Pattern(
		regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!])(?!.*\\s).{8,}$",
		message = "A senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, uma letra minúscula," +
			" um número e um caractere especial."
	)
	String password,
	
	@NotBlank(message = "Informe seu número do whatsapp.")
	@Pattern(
		regexp = "^\\(\\d\\d\\)\\s(\\d{5})-(\\d{4})$",
		message = "Informe o número do whatsapp no formato: (xx) xxxxx-xxxx."
	)
	String whatsapp
) {}
