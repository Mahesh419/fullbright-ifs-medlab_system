package com.fullbright.medlab.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="receipt")
public class Receipt {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "receipt_id")
	private long receiptId;	
	
	@Column(name = "total_price")
	private double totalPrice;
	
	@Column(name = "is_collected")
	private boolean isCollected;
	
	@Column(name = "customer_id")
	private int customerId;
	
	@Column(name = "location")
	private int location;
	
	@Column(name = "issued_date")
	private Date issuedDate;

	public Receipt(long receiptId, double totalPrice, boolean isCollected, int customerId, int location,
			Date issuedDate) {
		super();
		this.receiptId = receiptId;
		this.totalPrice = totalPrice;
		this.isCollected = isCollected;
		this.customerId = customerId;
		this.location = location;
		this.issuedDate = issuedDate;
	}
	
	public Receipt() {
		super();
	}

	public long getReceiptId() {
		return receiptId;
	}

	public void setReceiptId(long receiptId) {
		this.receiptId = receiptId;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public boolean isCollected() {
		return isCollected;
	}

	public void setCollected(boolean isCollected) {
		this.isCollected = isCollected;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getLocation() {
		return location;
	}

	public void setLocation(int location) {
		this.location = location;
	}

	public Date getIssuedDate() {
		return issuedDate;
	}

	public void setIssuedDate(Date issuedDate) {
		this.issuedDate = issuedDate;
	}
	

}
