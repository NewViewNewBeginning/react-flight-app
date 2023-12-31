import React, { useState } from "react";
import { airports, flightSchedules } from "./FlightDataServices";
import PersonalDetailsForm from "./PersonalDetailsForm";

const FlightSearchForm = () => {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [tripType, setTripType] = useState("one-way");
	const [departureDate, setDepartureDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const [error, setError] = useState("");
	const [flightDetails, setFlightDetails] = useState(null);
	const [currentStep, setCurrentStep] = useState("search");

	const handleProceedClick = () => {
		setCurrentStep("details");
	};

	const handlePurchase = personalDetails => {
		console.log("Personal Details:", personalDetails);
		// Process the purchase...
		setCurrentStep("purchase");
	};

	// Function to get 'From' airports - only those in Ireland
	const getFromAirports = () => {
		return airports.filter(airport => airport.country === "Ireland");
	};

	// Function to get 'To' airports based on the selected 'From' airport and its connections
	const getToAirports = () => {
		if (!from) return [];

		const availableDestinations = flightSchedules
			.filter(schedule => schedule.from === from)
			.map(schedule => schedule.to);

		return airports.filter(airport =>
			availableDestinations.includes(airport.iata)
		);
	};

	const handleSearch = event => {
		event.preventDefault();

		if (
			!from ||
			!to ||
			!departureDate ||
			(tripType === "return" && !returnDate)
		) {
			setError("Please fill in all required fields.");
			return;
		}

		const schedule = flightSchedules.find(s => s.from === from && s.to === to);
		if (
			!schedule ||
			!isDateAvailable(departureDate, schedule.days) ||
			(tripType === "return" && !isDateAvailable(returnDate, schedule.days))
		) {
			setError("No available flights for the selected dates.");
			setFlightDetails(null); // Reset flight details if no valid flight is found
			return;
		}

		if (!isDateAvailable(departureDate, schedule.days)) {
			setError("The selected departure date is not available for this route.");
			return;
		}

		if (tripType === "return" && !isDateAvailable(returnDate, schedule.days)) {
			setError("The selected return date is not available for this route.");
			return;
		}

		const numAdults = Number(adults);
		const numChildren = Number(children);

		if (isNaN(numAdults) || isNaN(numChildren)) {
			setError("The number of adults or children is invalid.");
			return;
		}

		const totalPrice = calculateTotalPrice(
			schedule,
			numAdults,
			numChildren,
			tripType
		);
		console.log(`Total price for the flight(s): ${totalPrice}`);
		setError(""); 
		const flightInfo = {
			from: from,
			to: to,
			tripType: tripType,
			departureDate: departureDate,
			returnDate: tripType === "return" ? returnDate : null,
			adults: numAdults,
			children: numChildren,
			totalPrice: totalPrice,
			
		};

		setFlightDetails(flightInfo);
	};

	const isDateAvailable = (date, availableDays) => {
		const dayOfWeek = new Date(date).getDay();
		return availableDays.includes(dayOfWeek);
	};

	const calculateTotalPrice = (schedule, adults, children, tripType) => {
		if (!schedule || isNaN(schedule.basePrice)) {
			console.error("Invalid schedule or basePrice.");
			return 0; // Return 0 or some error code that indicates the price couldn't be calculated.
		}

		const childrenDiscount = 0.2; // Assuming a 20% discount for children
		const adultPrice = schedule.basePrice * adults;
		const childrenPrice =
			schedule.basePrice * children * (1 - childrenDiscount);
		let totalPrice = adultPrice + childrenPrice;

		if (tripType === "return") {
			totalPrice *= 2;
		}

		return totalPrice;
	};

	return (
		<>
			{currentStep === "search" && (
				<>
					<form onSubmit={handleSearch}>
						{error && <div className='error-message'>{error}</div>}
						<div className='half-form'>
							<label>
								From:
								<select
									value={from}
									onChange={e => {
										setFrom(e.target.value);
										setFlightDetails(null);
										setError("");
									}}>
									<option value=''>Select Airport</option>
									{getFromAirports().map(airport => (
										<option key={airport.iata} value={airport.iata}>
											{airport.name}
										</option>
									))}
								</select>
							</label>
							<label>
								To:
								<select
									value={to}
									onChange={e => {
										setTo(e.target.value);
										setFlightDetails(null);
										setError("");
									}}
									disabled={!from}>
									<option value=''>Select Airport</option>
									{getToAirports().map(airport => (
										<option key={airport.iata} value={airport.iata}>
											{airport.name}
										</option>
									))}
								</select>
							</label>
							<label>
								Trip Type:
								<select
									value={tripType}
									onChange={e => {
										setTripType(e.target.value);
										setFlightDetails(null);
										setError("");
									}}>
									<option value='one-way'>One-way</option>
									<option value='return'>Return</option>
								</select>
							</label>
						</div>
						<div className='half-form'>
							<label>
								Departure Date:
								<input
									type='date'
									value={departureDate}
									onChange={e => {
										setDepartureDate(e.target.value);
										setFlightDetails(null);
										setError("");
									}}
								/>
							</label>
							{tripType === "return" && (
								<label>
									Return Date:
									<input
										type='date'
										value={returnDate}
										onChange={e => {
											setReturnDate(e.target.value);
											setFlightDetails(null);
											setError("");
										}}
										min={departureDate}
										disabled={tripType !== "return"}
									/>
								</label>
							)}
							<label>
								Adults:
								<input
									type='number'
									min='1'
									max='9'
									value={adults}
									onChange={e => {
										setAdults(Number(e.target.value));
										setFlightDetails(null);
										setError("");
									}}
								/>
							</label>
							<label>
								Children:
								<input
									type='number'
									min='0'
									max='9'
									value={children}
									onChange={e => {
										setChildren(Number(e.target.value));
										setFlightDetails(null);
										setError("");
									}}
								/>
							</label>
						</div>
						<button type='submit'>Search</button>
					</form>
					{flightDetails && (
						<div className='flight-details'>
							<h2>Flight Details</h2>
							<p>
								From: {airports.find(a => a.iata === flightDetails.from).name}
							</p>
							<p>To: {airports.find(a => a.iata === flightDetails.to).name}</p>
							<p>Trip Type: {flightDetails.tripType}</p>
							<p>Departure Date: {flightDetails.departureDate}</p>
							{flightDetails.returnDate && (
								<p>Return Date: {flightDetails.returnDate}</p>
							)}
							<p>Passengers: {flightDetails.adults + flightDetails.children}</p>
							<p>Adults: {flightDetails.adults}</p>
							<p>Children: {flightDetails.children}</p>
							<p>Total Price: ${flightDetails.totalPrice}</p>

							<button onClick={handleProceedClick}>Proceed</button>
						</div>
					)}
				</>
			)}

			{currentStep === "details" && (
				<PersonalDetailsForm onPurchase={handlePurchase} />
			)}

			{currentStep === "purchase" && (
				<div className='finalMsgCont'>
					<p className='finalMsg'>Purchase completed. Thank you!</p>
				</div>
			)}
		</>
	);
};

export default FlightSearchForm;
