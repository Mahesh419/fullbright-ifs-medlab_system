package com.fullbright.medlab.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.fullbright.medlab.entities.User;
import com.fullbright.medlab.models.UserModel;
import com.fullbright.medlab.repositories.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	static UserRepository userRepository;
	
	public static String find(UserModel user) {
		System.out.println(user.getUsername());
		return  userRepository.findUserById(user.getUsername(), user.getPassword());
	}
}
