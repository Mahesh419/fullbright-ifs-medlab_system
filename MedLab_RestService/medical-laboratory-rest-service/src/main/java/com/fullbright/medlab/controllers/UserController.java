package com.fullbright.medlab.controllers;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.fullbright.medlab.models.UserModel;
import com.fullbright.medlab.repositories.UserRepository;
import com.fullbright.medlab.services.UserService;

@Path("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@POST
	@Path("/verify")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public UserModel verifyLogin(UserModel user) {
		user.setUserType("admin");
		return user;
	}
	
}
