package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.User;

public class UserInsertDTO extends UserDTO implements Serializable {
	private static final long serialVersionUID = -325965484153283063L;
	
	private String password;
	
	public UserInsertDTO() {}
	
	public UserInsertDTO(User user) {
		this.setEmail(user.getEmail());
		this.setName(user.getName());
		this.setId(user.getId());
		this.setPassword(user.getPassword());
		user.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
