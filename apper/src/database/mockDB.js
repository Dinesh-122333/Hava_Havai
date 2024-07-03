// mockDb.js

let airports = [
    { id: 1, name: "Indra Gandhi International Airport", country: "India", code: "DEL", terminal: "3" },
    { id: 2, name: "Dubai International Airport", country: "UAE", code: "DXB", terminal: "5" },
    { id: 3, name: "Heathrow Airport", country: "England", code: "LHR", terminal: "6" },
    { id: 4, name: "Istanbul Airport", country: "Turkey", code: "IST", terminal: "3" },
    { id: 5, name: "Rajiv Gandhi International Airport", country: "Texas", code: "DFW", terminal: "14" }
];

export const getAirports = () => {
    return airports;
};

export const addAirport = (airport) => {
    airport.id = airports.length ? airports[airports.length - 1].id + 1 : 1;
    airports.push(airport);
};

export const deleteAirport = (id) => {
    airports = airports.filter(airport => airport.id !== id);
};

export const updateAirport = (updatedAirport) => {
    airports = airports.map(airport => airport.id === updatedAirport.id ? updatedAirport : airport);
};
