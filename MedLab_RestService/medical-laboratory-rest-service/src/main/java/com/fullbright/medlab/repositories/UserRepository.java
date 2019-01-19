package com.fullbright.medlab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullbright.medlab.entities.User;
import com.fullbright.medlab.models.UserModel;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query("SELECT user.user_type FROM user WHERE user.username = (:username) AND user.password = (:password)")
	String findUserById(@Param("username") String username, @Param("password") String password);
}
