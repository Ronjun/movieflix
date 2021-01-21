package com.devsuperior.movieflix.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.services.AuthService;
import com.devsuperior.movieflix.services.ReviewService;

@RestController
@RequestMapping(value="/reviews")
public class ReviewResource {
	
	@Autowired
	private ReviewService service;
	
	@Autowired
	private AuthService authService;
	
	@PostMapping
	@PreAuthorize("hasRole('MEMBER')")
	public ResponseEntity<ReviewDTO> insert (@Valid @RequestBody ReviewDTO dto){
		dto.setUser(new UserDTO(authService.authenticated()));
		dto.setText(dto.getText().trim());
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
}
