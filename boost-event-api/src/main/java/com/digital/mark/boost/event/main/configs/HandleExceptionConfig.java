package com.digital.mark.boost.event.main.configs;

import com.digital.mark.boost.event.infra.errors.*;
import com.digital.mark.boost.event.main.properties.ExceptionProperties;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.*;
import org.springframework.lang.NonNull;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;
import java.util.List;

@RestControllerAdvice
public class HandleExceptionConfig extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler({ Exception.class, BadRequestException.class })
	public ResponseEntity<ExceptionProperties> handleDefaultException(Exception ex) {
		return new ResponseEntity<>(responseFactory(ex, 400), HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(UnauthorizedException.class)
	public ResponseEntity<ExceptionProperties> handleUnauthorizedException(Exception ex) {
		return new ResponseEntity<>(responseFactory(ex, 401), HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler(ForbiddenException.class)
	public ResponseEntity<ExceptionProperties> handleForbiddenException(Exception ex) {
		return new ResponseEntity<>(responseFactory(ex, 403), HttpStatus.FORBIDDEN);
	}

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ExceptionProperties> handleNotFoundException(Exception ex) {
		return new ResponseEntity<>(responseFactory(ex, 404), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ExceptionProperties> handleSQLException(DataIntegrityViolationException ex) {
		var response = new ExceptionProperties(
			"Operação não pode ser concluída devido a dados inválidos ou duplicados.", 
			406, 
			new Date()
		);
		return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(
		@NonNull MethodArgumentNotValidException ex,
		@NonNull HttpHeaders headers,
		@NonNull HttpStatusCode status,
		@NonNull WebRequest request
	) {
		List<String> errors = ex.getBindingResult()
			.getFieldErrors()
			.stream()
			.map(FieldError::getDefaultMessage)
			.toList();
		
		var message = new StringBuilder();
		
		for (int i = 0; i < errors.size(); i++) {
			message.append(errors.get(i));
			
			if (i != errors.size() - 1) {
				message.append(" ");
			}
		}
		
		var response = new ExceptionProperties(message.toString(), status.value(), new Date());
		return new ResponseEntity<>(response, status);
	}

	private ExceptionProperties responseFactory(Exception ex, int code) {
		return new ExceptionProperties(ex.getMessage(),	code,	new Date());
	}
}
