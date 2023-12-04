import React, { useState } from "react";

const PersonalDetailsForm = ({ onPurchase }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		if (!firstName || !lastName || !email) {
			setError("Please fill in all required fields.");
			return;
		}

		setError("");
		alert("Your booking has been confirmed!");
		onPurchase({ firstName, lastName, email });
	};

	return (
		<>
			<h2>Personal Details</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='first-name'>First Name</label>
					<input
						type='text'
						id='first-name'
						value={firstName}
						onChange={event => setFirstName(event.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='last-name'>Last Name</label>
					<input
						type='text'
						id='last-name'
						value={lastName}
						onChange={event => setLastName(event.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
				</div>
				{error && <p className='error'>{error}</p>}
				<button type='submit'>Buy Now</button>
			</form>
		</>
	);
};
export default PersonalDetailsForm;
