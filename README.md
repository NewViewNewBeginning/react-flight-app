# ReactFlight Checker App

## Project Overview

### Functionality and Operation

**ReactFlight Checker App** is a React-based web application that offers a streamlined way for users to search and view flight details. This app is tailored for ease of use and efficiency, catering to both casual travelers and frequent flyers. The main features include:

- **Flight Search:** Users can input travel criteria like origin, destination, dates, and passenger count to find flights.
- **Detailed Flight Information:** The app displays comprehensive flight details including times, duration, layovers, and prices.
- **Real-time Data Display:** Utilizes real-time data rendering for displaying flight options.
- **Responsive Design:** The UI is fully responsive, adapting seamlessly to various screen sizes and devices.
- **User Input Validation:** Ensures the accuracy and integrity of user inputs with robust form field validation.

### App Aesthetics

- **Text Color:** `#242F36` for clear readability against light backgrounds.
- **Background Color:** `#BAE4FC`, providing a calm and inviting sky-like ambiance.
- **Call-To-Action Buttons:** `#FFAD00`, designed to stand out and guide user interaction.
- **Font Family:** Roboto, chosen for its modern look and excellent readability across devices.

### Link to Live Application

Experience the ReactFlight Checker App in action: [React Flight App](newviewnewbeginning.github.io)

### Testing Data Structure

The app uses a structured data approach for testing, ensuring comprehensive coverage of various flight scenarios. The data model includes:

#### Airports Data

```js
const airports = [
	// Example entry
	{ name: "Dublin", iata: "DUB", country: "Ireland" },
	// ...additional airport entries
];
```

Each airport object includes the name, IATA code, and country, providing essential details for flight searches.

#### Flight Schedules Data

```js
const flightSchedules = [
	// Example entry
	{ from: "DUB", to: "MAD", days: [0, 1, 2, 3, 4, 5, 6], basePrice: 90 },
	// ...additional flight schedule entries
];
```

Flight schedules include from and to fields with IATA codes, an array of operating days (0-6, representing Monday-Sunday), and a base price. This structure allows for dynamic testing of flight availability and pricing.

### Additional Information

- Version Control: The project is managed using GIT, ensuring efficient tracking and management of changes.
- Development Tools: Developed using Visual Studio Code (VSCode), offering a robust environment for React development.
- Deployment: Hosted on GitHub Pages, providing a reliable and accessible platform for users to access the app.
