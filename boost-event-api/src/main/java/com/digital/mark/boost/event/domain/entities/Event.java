package com.digital.mark.boost.event.domain.entities;

import com.digital.mark.boost.event.domain.types.EventStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "events")
@Data
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Event implements Serializable {
	
	@Serial
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Setter(value = AccessLevel.PRIVATE)
	@EqualsAndHashCode.Include
	private String id;
	
	private String name;
	private String description;
	private String segment;
	private String local;
	private int capacity;
	
	@Column(name = "occurs_at")
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime occursAt;
	
	@Enumerated(EnumType.STRING)
	private EventStatus status;
	
	@Singular("email")
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "event")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private final List<Email> emails;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private User user;
	
	public Event() {
		this.status = EventStatus.IN_PROGRESS;
		this.emails = new ArrayList<>();
	}
	
	public void addEmail(Email email) {
		emails.add(email);
	}
}
