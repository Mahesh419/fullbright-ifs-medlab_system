package com.fullbright.medlab.repositories;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullbright.medlab.entities.TestReportDetail;
import com.fullbright.medlab.entities.TestReportDetailId;

@Repository
public interface TestReportDetailRepository extends CrudRepository<TestReportDetail, TestReportDetailId> {

	@Modifying
	@Transactional
	@Query(value  = "UPDATE test_report_detail SET value = (:value), test_status =  true, end_time = (:datetime) WHERE report_id = (:reportId) AND test_id = (:testId)", nativeQuery = true)
	public void addReportDetails(@Param("value") double value, @Param("datetime") Date dateTime, @Param("reportId") long reportId, @Param("testId") long testId);
	
	@Query(value = "SELECT * FROM test_report_detail WHERE report_id = (:reportId)", nativeQuery = true)
	public TestReportDetail[] getTestReportDetails(@Param("reportId") long reportId);
}
