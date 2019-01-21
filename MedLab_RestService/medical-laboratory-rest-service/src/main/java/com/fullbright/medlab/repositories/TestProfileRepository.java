package com.fullbright.medlab.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fullbright.medlab.entities.TestProfile;

@Repository
public interface TestProfileRepository extends CrudRepository<TestProfile, Long>{

}
