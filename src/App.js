import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlightSearchForm from "./FlightSearchForm";

function App() {
	return (
		<div className='app'>
			<Header />
			<FlightSearchForm />
			<Footer />
		</div>
	);
}

export default App;
