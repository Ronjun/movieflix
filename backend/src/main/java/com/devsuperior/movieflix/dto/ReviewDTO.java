package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "campo obrigatório")
	private String text;
	private Long movieId;
	private String userName;
	
	@JsonIgnore
	private MovieDTO movie;

	private UserDTO user;
	
	public ReviewDTO() {}

	public ReviewDTO(Long id, String text, MovieDTO movie, UserDTO user) {
		this.id = id;
		this.text = text;
		this.movie = movie;
		this.user = user;
		this.movieId = movie.getId();
		this.userName = user.getName();
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movie = new MovieDTO(entity.getMovie());
		user = new UserDTO(entity.getUser());
		movieId = entity.getMovie().getId();
		userName = user.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public MovieDTO getMovie() {
		return movie;
	}

	public void setMovie(MovieDTO movie) {
		this.movie = movie;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public UserDTO getUser() {
		return user;
	}
	
	
}
