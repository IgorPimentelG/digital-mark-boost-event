package com.digital.mark.boost.event.infra.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateEmailDto(
	@NotBlank(message = "Informe o título do e-mail.")
	@Size(max = 100, message = "Informe o título do e-mail com no máximo 100 caracteres.")
	String subject,
	
	@NotBlank(message = "Informe o conteúdo do e-mail.")
	String content
) {}
