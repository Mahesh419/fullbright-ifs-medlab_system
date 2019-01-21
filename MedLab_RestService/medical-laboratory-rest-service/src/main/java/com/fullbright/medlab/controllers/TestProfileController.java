package com.fullbright.medlab.controllers;


import java.util.ArrayList;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fullbright.medlab.entities.TestProfile;
import com.fullbright.medlab.repositories.TestProfileRepository;

@Component
@Path("/testprofile")
public class TestProfileController {
	
	@Autowired
	TestProfileRepository testProfileRepository;
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllProfile(){
		ArrayList<TestProfile> profileList = (ArrayList<TestProfile>) testProfileRepository.findAll();
		return Response.status(Response.Status.OK).entity(profileList).build();
	}

}
