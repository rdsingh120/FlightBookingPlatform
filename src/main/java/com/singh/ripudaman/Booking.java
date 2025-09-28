//Ripudaman Singh - 301371452
package com.singh.ripudaman;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

public class Booking {
	
	//Travel Details
	private String tripType; 
	private String departureCity;
	private String arrivalCity;
	private String airline;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate departureDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate returnDate;
	
	private int adultsCount;	
	

	//Traveler Details
	private String prefix;
	private String firstName;
	private String middleName;
	private String lastName;
	
	private String passportNumber;
	private String nationality;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate expiryDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate issueDate;
	
	private String phoneNumber;
	private String email;
	
	private String streetAddress;
	private String streetAddressLine2;
	private String city;
	private String province;
	private String postalCode;
	private String country;
	
	
	//Getters and setters
	public String getTripType() {
		return tripType;
	}
	public void setTripType(String tripType) {
		this.tripType = tripType;
	}
	
	public String getDepartureCity() {
		return departureCity;
	}
	public void setDepartureCity(String departureCity) {
		this.departureCity = departureCity;
	}
	public String getArrivalCity() {
		return arrivalCity;
	}
	public void setArrivalCity(String arrivalCity) {
		this.arrivalCity = arrivalCity;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public LocalDate getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}
	public LocalDate getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(LocalDate returnDate) {
		this.returnDate = returnDate;
	}
	
	public int getAdultsCount() {
		return adultsCount;
	}
	public void setAdultsCount(int adultsCount) {
		this.adultsCount = adultsCount;
	}
	public String getPrefix() {
		return prefix;
	}
	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPassportNumber() {
		return passportNumber;
	}
	public void setPassportNumber(String passportNumber) {
		this.passportNumber = passportNumber;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public LocalDate getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}
	public LocalDate getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(LocalDate issueDate) {
		this.issueDate = issueDate;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getStreetAddress() {
		return streetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}
	public String getStreetAddressLine2() {
		return streetAddressLine2;
	}
	public void setStreetAddressLine2(String streetAddressLine2) {
		this.streetAddressLine2 = streetAddressLine2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	//join name to create single string
	public String getFullName() {
		String prefixStr = getPrefix() == "" ? getPrefix() : getPrefix() + " ";
		String middleNameStr = getMiddleName() == "" ? getMiddleName() : getMiddleName() + " ";
		return prefixStr + getFirstName() + " " + middleNameStr + getLastName();
	}
	
	//join address to create single string
	public String getFullAddress() {
		String streetAddressLine2Str = getStreetAddressLine2() == "" ? getStreetAddressLine2() : getStreetAddressLine2() + " ";
		return getStreetAddress() + " " + streetAddressLine2Str + " " + getCity() + " " + getProvince() + " " + getPostalCode() + " " + getCountry();
	}
	
	public int calculatePrice() {
		boolean isRoundTrip = getTripType().equals("Round Trip") ? true : false;
		int price = isRoundTrip ? 2000 : 1000;
		return price;
	}
	


}
