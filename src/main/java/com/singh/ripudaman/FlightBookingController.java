package com.singh.ripudaman;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FlightBookingController {
	
	@RequestMapping("/book")
	public String submitForm(@ModelAttribute("bookingForm") Booking booking, Model model) {
		
		String fullName = booking.getFullName();
		String fullAddress = booking.getFullAddress();
		String price = "$" + String.format("%.2f", booking.calculatePrice());
		
		model.addAttribute("booking", booking);
		
		model.addAttribute("fullName", fullName);
		model.addAttribute("fullAddress", fullAddress);
		model.addAttribute("price", price);


		return "show-booking";
	}
}
