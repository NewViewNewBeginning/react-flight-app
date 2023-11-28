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
		{ name: "Dublin", iata: "DUB", country: "Ireland" },
		{ name: "Cork", iata: "ORK", country: "Ireland" },
		{ name: "Shannon", iata: "SNN", country: "Ireland" },
		{ name: "Madrid", iata: "MAD", country: "Spain" },
		{ name: "Barcelona", iata: "BCN", country: "Spain" },
		{ name: "Malaga", iata: "AGP", country: "Spain" },
		{ name: "Alicante", iata: "ALC", country: "Spain" },
		{ name: "Palma", iata: "PMI", country: "Spain" },
		{ name: "Paris", iata: "CDG", country: "France" },
		{ name: "Nice", iata: "NCE", country: "France" },
		{ name: "Lyon", iata: "LYS", country: "France" },
		{ name: "Marseille", iata: "MRS", country: "France" },
		{ name: "Toulouse", iata: "TLS", country: "France" },
		{ name: "Bordeaux", iata: "BOD", country: "France" },
		{ name: "Nantes", iata: "NTE", country: "France" },
		{ name: "Lille", iata: "LIL", country: "France" },
		{ name: "Strasbourg", iata: "SXB", country: "France" },
		{ name: "Lisbon", iata: "LIS", country: "Portugal" },
		{ name: "Porto", iata: "OPO", country: "Portugal" },
		{ name: "Faro", iata: "FAO", country: "Portugal" },
		{ name: "Funchal", iata: "FNC", country: "Portugal" },
		{ name: "Ponta Delgada", iata: "PDL", country: "Portugal" },
		{ name: "Amsterdam", iata: "AMS", country: "Netherlands" },
		{ name: "Rotterdam", iata: "RTM", country: "Netherlands" },
		{ name: "The Hague", iata: "HAG", country: "Netherlands" },
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
		if (!from) return airports; // Return all airports if 'From' is not selected

		const fromAirport = airports.find(airport => airport.iata === from);
		if (!fromAirport) return airports; // Return all airports if 'From' airport is not found

		return airports.filter(airport => {
			// Exclude the selected 'From' airport and any Irish airports if 'From' is in Ireland
			return (
				airport.iata !== from &&
				(fromAirport.country !== "Ireland" || airport.country !== "Ireland")
			);
		});
	};

	return (
		<form onSubmit={handleSearch}>
			{error && <div className='error-message'>{error}</div>}
			<label>
				From:
				<select value={from} onChange={e => setFrom(e.target.value)}>
					<option value=''>Select Airport</option>
					{airports.map(airport => (
						<option key={airport.iata} value={airport.iata}>
							{airport.name}
						</option>
					))}
				</select>
			</label>
			<label>
				To:
				<select value={to} onChange={e => setTo(e.target.value)}>
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
