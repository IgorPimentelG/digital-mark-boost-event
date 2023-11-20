package com.digital.mark.boost.event.infra.dtos;

import jakarta.validation.constraints.*;

import java.time.LocalDateTime;

public record CreateEventDto(
	@NotBlank(message = "Informe o nome do evento.")
	@Size(max = 50, message = "Informe o nome do evento com no máximo 50 caracteres.")
	String name,

	@NotBlank(message = "Informe uma breve descrição sobre o evento.")
	@Size(max = 100, message = "Informe uma descrição sobre o evento com no máximo 100 caracteres.")
	String description,

	@NotBlank(message = "Informe o segmento do evento.")
	@Size(max = 50, message = "Informe o segmento do evento com no máximo 50 caracteres.")
	String segment,

	@NotBlank(message = "Informa a localidade do evento.")
	@Size(max = 50, message = "Informa a localidade do evento com no máximo 50 caracteres.")
	String local,

	@NotNull(message = "Informe a capacidade da localidade do evento.")
	@Min(value = 5, message = "A capacidade do evento deve ser de no mínimo 5 lugares.")
	int capacity,

	@NotNull(message = "Informe a data do evento.")
	@Future(message = "Não é permitido registrar eventos que já ocorreram.")
	LocalDateTime occursAt
) {}
