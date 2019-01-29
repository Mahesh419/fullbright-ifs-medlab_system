package com.fullbright.medlab.models;

public class TestDetailModel {

	private long test_id;
	private String testName;
	private boolean testStatus;
	private double testResult;
	private String range;
	private String unit;
	
	public TestDetailModel(long test_id, String testName, boolean testStatus, double testResult, String range,
			String unit) {
		super();
		this.test_id = test_id;
		this.testName = testName;
		this.testStatus = testStatus;
		this.testResult = testResult;
		this.range = range;
		this.unit = unit;
	}
	
	public TestDetailModel() {
		super();
	}

	public long getTest_id() {
		return test_id;
	}

	public void setTest_id(long test_id) {
		this.test_id = test_id;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public boolean isTestStatus() {
		return testStatus;
	}

	public void setTestStatus(boolean testStatus) {
		this.testStatus = testStatus;
	}

	public double getTestResult() {
		return testResult;
	}

	public void setTestResult(double testResult) {
		this.testResult = testResult;
	}

	public String getRange() {
		return range;
	}

	public void setRange(String range) {
		this.range = range;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}	
	
}
