import React, { useState } from "react";

const FlightSearchForm = () => {
	// Define state for each form input
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [tripType, setTripType] = useState("one-way");
	const [departureDate, setDepartureDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const [error, setError] = useState(""); // State for error message

	// Predefined list of airports
	const airports = [
		"Dublin",
		"Cork",
		"Shannon",
		"Madrid",
		"Barcelona",
		"Nice",
		"Rome",
	];

	// Handler for form submission
	const handleSearch = event => {
		event.preventDefault();
		// Validate inputs
		if (
			!from ||
			!to ||
			!departureDate ||
			(tripType === "return" && !returnDate)
		) {
			setError("Please fill in all required fields.");
			return;
		}

		// Clear error message upon successful validation
		setError("");
		// TODO: Implement search functionality
		console.log({
			from,
			to,
			tripType,
			departureDate,
			returnDate,
			adults,
			children,
		});
	};
	// Get airports for the 'To' dropdown excluding the selected 'From' airport
	const getToAirports = () => {
		return airports.filter(airport => airport !== from);
	};

	return (
		<form onSubmit={handleSearch}>
			{error && <div className='error-message'>{error}</div>}
			<label>
				From:
				<select value={from} onChange={e => setFrom(e.target.value)}>
					<option value=''>Select Airport</option>
					{airports.map(airport => (
						<option key={airport} value={airport}>
							{airport}
						</option>
					))}
				</select>
			</label>
			<label>
				To:
				<select value={to} onChange={e => setTo(e.target.value)}>
					<option value=''>Select Airport</option>
					{getToAirports().map(airport => (
						<option key={airport} value={airport}>
							{airport}
						</option>
					))}
				</select>
			</label>
			<label>
				Trip Type:
				<select value={tripType} onChange={e => setTripType(e.target.value)}>
					<option value='one-way'>One-way</option>
					<option value='return'>Return</option>
				</select>
			</label>
			<label>
				Departure Date:
				<input
					type='date'
					value={departureDate}
					onChange={e => setDepartureDate(e.target.value)}
				/>
			</label>
			{tripType === "return" && (
				<label>
					Return Date:
					<input
						type='date'
						value={returnDate}
						onChange={e => setReturnDate(e.target.value)}
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
					onChange={e => setAdults(Number(e.target.value))}
				/>
			</label>
			<label>
				Children:
				<input
					type='number'
					min='0'
					max='9'
					value={children}
					onChange={e => setChildren(Number(e.target.value))}
				/>
			</label>
			<button type='submit'>Search</button>
		</form>
	);
};

export default FlightSearchForm;
