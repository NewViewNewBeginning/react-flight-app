import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlightSearchForm from "./FlightSearchForm";
import flightsData from "./flightsData.json";

function App() {
	const [searchResults, setSearchResults] = useState([]);

	const [availableDestinations, setAvailableDestinations] = useState([]);

	const updateAvailableDestinations = departureCity => {
		const destinations = flightsData
			.filter(flight => flight.departure === departureCity)
			.map(flight => flight.destination);
		setAvailableDestinations([...new Set(destinations)]);
	};

	const handleSearch = formData => {
		const filteredFlights = flightsData.filter(
			flight =>
				flight.departure === formData.departure &&
				flight.destination === formData.destination &&
				(!formData.date || flight.date === formData.date)
		);
		setSearchResults(filteredFlights);
	};

	return (
		<div className='app'>
			<Header />
			<FlightSearchForm
				onSearch={handleSearch}
				updateDestinations={updateAvailableDestinations}
			/>
			<div>
				{searchResults.map(flight => (
					<div key={flight.id}>
						<p>Price: {flight.price} PLN</p>
						<p>Avaible seats: {flight.seatsAvailable}</p>
						<p>Departure: {flight.departure}</p>
						<p>Arrival: {flight.destination}</p>
						{/* Możesz dodać więcej informacji o locie tutaj */}
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default App;
