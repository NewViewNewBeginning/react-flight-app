import React, { useState, useEffect } from "react";

const FlightSearchForm = ({ onSearch, updateDestinations }) => {
	const [formData, setFormData] = useState({
		departure: "",
		destination: "",
		date: "",
		passengers: 1,
		ticketType: "one-way",
	});

	useEffect(() => {
		updateDestinations(formData.departure);
	}, [formData.departure]);

	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!formData.departure || !formData.destination || !formData.date) {
			setErrorMessage("Please fill out all fields.");
			return;
		}
		setErrorMessage("");
		onSearch(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='half-form'>
				<div>
					<label htmlFor='departure'>Flight From:</label>
					<input
						type='text'
						id='departure'
						name='departure'
						placeholder='City name or airport code'
						value={formData.departure}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='destination'>Destination:</label>
					<input
						type='text'
						id='destination'
						name='destination'
						placeholder='City name or airport code'
						value={formData.destination}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='half-form'>
				<div>
					<label htmlFor='date'>Date:</label>
					<input
						type='date'
						id='date'
						name='date'
						value={formData.date}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='passengers'>No. of passengers</label>
					<input
						type='number'
						id='passengers'
						name='passengers'
						min='1'
						value={formData.passengers}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className='last-input'>
				<label htmlFor='ticketType'>One way / Return</label>
				<select
					id='ticketType'
					name='ticketType'
					value={formData.ticketType}
					onChange={handleChange}>
					<option value='one-way'>One Way</option>
					<option value='return'>Return</option>
				</select>
			</div>
			<button type='submit'>Search Flights</button>
			{errorMessage && <div className='error-message'>{errorMessage}</div>}
		</form>
	);
};

export default FlightSearchForm;
