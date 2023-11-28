export const airports = [
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

export const flightSchedules = [
	{ from: "DUB", to: "MAD", days: [1, 3, 5], basePrice: 90 },
	{ from: "DUB", to: "BCN", days: [0, 2, 4], basePrice: 85 },
	{ from: "DUB", to: "AGP", days: [1, 4, 6], basePrice: 75 },
	{ from: "DUB", to: "ALC", days: [2, 5], basePrice: 70 },
	{ from: "DUB", to: "PMI", days: [0, 3, 6], basePrice: 95 },
	{ from: "DUB", to: "CDG", days: [1, 4], basePrice: 88 },
	{ from: "DUB", to: "NCE", days: [2, 5], basePrice: 93 },
	{ from: "DUB", to: "LYS", days: [1, 3, 6], basePrice: 60 },
	{ from: "DUB", to: "MRS", days: [0, 2, 4], basePrice: 82 },
	{ from: "DUB", to: "TLS", days: [1, 4, 6], basePrice: 80 },
	{ from: "ORK", to: "MAD", days: [2, 5], basePrice: 90 },
	{ from: "ORK", to: "BCN", days: [0, 3, 6], basePrice: 85 },
	{ from: "ORK", to: "CDG", days: [1, 4], basePrice: 88 },
	{ from: "ORK", to: "LIS", days: [2, 5], basePrice: 73 },
	{ from: "ORK", to: "AMS", days: [1, 3, 6], basePrice: 78 },
	{ from: "SNN", to: "MAD", days: [0, 2, 4], basePrice: 89 },
	{ from: "SNN", to: "BCN", days: [1, 4], basePrice: 86 },
	{ from: "SNN", to: "CDG", days: [2, 5], basePrice: 92 },
	{ from: "SNN", to: "LIS", days: [0, 3, 6], basePrice: 74 },
	{ from: "SNN", to: "AMS", days: [1, 4], basePrice: 77 },
	{ from: "DUB", to: "OPO", days: [0, 3, 6], basePrice: 90 },
	{ from: "DUB", to: "FAO", days: [1, 3, 5], basePrice: 85 },
	{ from: "DUB", to: "FNC", days: [2, 4], basePrice: 100 },
	{ from: "DUB", to: "PDL", days: [1, 3, 5], basePrice: 110 },
	{ from: "ORK", to: "OPO", days: [0, 2, 4], basePrice: 88 },
	{ from: "ORK", to: "FAO", days: [1, 3, 5], basePrice: 80 },
	{ from: "ORK", to: "FNC", days: [2, 4, 6], basePrice: 105 },
	{ from: "ORK", to: "PDL", days: [1, 3, 5], basePrice: 99 },
	{ from: "SNN", to: "OPO", days: [0, 3, 6], basePrice: 87 },
	{ from: "SNN", to: "FAO", days: [1, 4], basePrice: 82 },
	{ from: "SNN", to: "FNC", days: [2, 5], basePrice: 98 },
	{ from: "SNN", to: "PDL", days: [1, 3, 6], basePrice: 115 },
];
