package com.fullbright.medlab.models;

import java.util.ArrayList;

import com.fullbright.medlab.entities.Test;
import com.fullbright.medlab.entities.TestReportDetail;

public class ReportFillDataModel {

	private long reportId;
	private long profileId;
	private TestDataModel[] testResultList;
	
	public long getReportId() {
		return reportId;
	}
	public void setReportId(long reportId) {
		this.reportId = reportId;
	}
	public long getTestProfileId() {
		return profileId;
	}
	public void setTestProfileId(long testProfileId) {
		this.profileId = testProfileId;
	}
	public TestDataModel[] getTestResultList() {
		return testResultList;
	}
	public void setTestResultList(TestDataModel[] testResultList) {
		this.testResultList = testResultList;
	}
	
	public ReportFillDataModel(long reportId, long testProfileId, TestDataModel[] testResultList) {
		super();
		this.reportId = reportId;
		this.profileId = testProfileId;
		this.testResultList = testResultList;
	}
	
	public ReportFillDataModel() {
		super();
	}
	
}
