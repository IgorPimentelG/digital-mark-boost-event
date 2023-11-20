package com.digital.mark.boost.event.infra.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.digital.mark.boost.event.infra.dtos.AuthDto;
import com.digital.mark.boost.event.main.properties.TokenProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Date;

@Service
public class TokenService {

	@Autowired
	private TokenProperties tokenProperties;
	
	public AuthDto createToken(String username) {
		var expiration = getAccessTokenExpiration();
		var accessToken = getAccessToken(username, expiration);
		return new AuthDto(accessToken, expiration);
	}
	
	public String validateToken(String token) {
		return JWT.require(getAlgorithm())
			.withIssuer(getIssuer())
			.build()
			.verify(token)
			.getSubject();
	}
	
	private String getAccessToken(String username, Date expiration) {
		return JWT.create()
			.withIssuer(getIssuer())
			.withSubject(username)
			.withExpiresAt(expiration)
			.sign(getAlgorithm());
	}
	
	private Algorithm getAlgorithm() {
		return Algorithm.HMAC256(tokenProperties.getSecretKey());
	}
	
	private String getIssuer() {
		return ServletUriComponentsBuilder.fromCurrentContextPath()
			.build()
			.toUriString();
	}
	
	private Date getAccessTokenExpiration() {
		var now = new Date();
		return new Date(now.getTime() + tokenProperties.getValidityInMilliseconds());
	}
}
