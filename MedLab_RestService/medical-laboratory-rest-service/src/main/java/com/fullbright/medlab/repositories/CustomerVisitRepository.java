package com.fullbright.medlab.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullbright.medlab.entities.CustomerVisit;

@Repository
public interface CustomerVisitRepository extends CrudRepository<CustomerVisit, Long> {

	@Query(value = "SELECT * FROM customer_visit WHERE customer_visit_id = (:customerVisitId)", nativeQuery = true)
	CustomerVisit getCustomerVisitByReportId(@Param("customerVisitId") long customerVisitId);
	
}
