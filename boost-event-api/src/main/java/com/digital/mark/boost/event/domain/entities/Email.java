package com.digital.mark.boost.event.domain.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "emails")
@Data
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Email implements Serializable {

	@Serial
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Setter(value = AccessLevel.PRIVATE)
	@EqualsAndHashCode.Include
	private String id;
	
	private String subject;
	private String content;
	
	@Column(name = "created_at")
	private LocalDateTime createdAt;
	
	@ManyToOne
	@JoinColumn(name = "event_id")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Event event;
	
	public Email() {
		this.createdAt = LocalDateTime.now();
	}
}
