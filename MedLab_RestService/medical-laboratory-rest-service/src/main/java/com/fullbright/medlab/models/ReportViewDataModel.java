package com.fullbright.medlab.models;

public class ReportViewDataModel {

	private long reportId;
	private String profileName;
	private String customerName;
	private String gender;
	private String location;
	private boolean isCompleted;
	private TestDetailModel[] testList;
	
	public ReportViewDataModel(long reportId, String profileName, String customerName, String gender, String location,
			boolean isCompleted, TestDetailModel[] testList) {
		super();
		this.reportId = reportId;
		this.profileName = profileName;
		this.customerName = customerName;
		this.gender = gender;
		this.location = location;
		this.isCompleted = isCompleted;
		this.testList = testList;
	}

	public ReportViewDataModel() {
		super();
	}

	public long getReportId() {
		return reportId;
	}

	public void setReportId(long reportId) {
		this.reportId = reportId;
	}

	public String getProfileName() {
		return profileName;
	}

	public void setProfileName(String profileName) {
		this.profileName = profileName;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public TestDetailModel[] getTestList() {
		return testList;
	}

	public void setTestList(TestDetailModel[] testList) {
		this.testList = testList;
	}
	
}
