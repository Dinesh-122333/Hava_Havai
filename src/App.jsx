import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Airports from "./components/Airports";
import AirportBook from "./component/AirportBook";
import Home from "./component/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/airport/:id" element={<AirportBook />} />
            </Routes>
        </Router>
    );
}

export default App;
