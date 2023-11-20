package com.digital.mark.boost.event.main.properties;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TokenProperties {
	
	private String secretKey;
	private long validityInMilliseconds;
	
}
