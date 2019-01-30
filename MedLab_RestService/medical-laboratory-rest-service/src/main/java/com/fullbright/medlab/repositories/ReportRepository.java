package com.fullbright.medlab.repositories;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fullbright.medlab.entities.Report;

@Repository
public interface ReportRepository extends CrudRepository<Report, Long> {

	@Query(value = "SELECT report_id FROM report WHERE specimen_id = (:specimenId)", nativeQuery = true)
	long getReportIdBySpecimenId(@Param("specimenId") String specimenId);
	
	@Modifying
	@Transactional
	@Query(value  = "UPDATE report SET is_completed =  true WHERE report_id = (:reportId)", nativeQuery = true)
	public void updateReportStatus(@Param("reportId") long reportId);

	@Query(value = "SELECT * FROM report WHERE receipt_Id = (:receiptId)", nativeQuery = true)
	Report getReportDetailsByReceiptId(@Param("receiptId") String receiptId);
	
}
