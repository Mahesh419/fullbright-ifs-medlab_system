package com.fullbright.medlab.models;

public class TestDataModel {
	
	private long testId;
	private double testValue;
	
	public long getTestId() {
		return testId;
	}
	public void setTestId(long testId) {
		this.testId = testId;
	}
	public double getTestValue() {
		return testValue;
	}
	public void setTestValue(double testValue) {
		this.testValue = testValue;
	}
	
	public TestDataModel(long testId, double testValue) {
		super();
		this.testId = testId;
		this.testValue = testValue;
	}
	
	public TestDataModel() {
		super();
	}
	
}
