package com.fullbright.medlab.controllers;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/customer")
public class CustomerController {

	@GET
	@Transactional
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCustomer() {
		return Response.status(Response.Status.ACCEPTED.getStatusCode()).build();
	}
}
