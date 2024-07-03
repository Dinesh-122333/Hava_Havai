import React, { useState, useEffect } from "react";
import { getAirports, updateAirport } from "../database/mockDB.js";
import ra from "../assets/rightarrow.png"
import InternalProps from "./InternalProps.jsx";

export default function AirportDetail({ airportId }) {
    const airport = getAirports().find(a => a.id === parseInt(airportId));

    const [name, setName] = useState(airport.name);

    return (
        <>
        <div className="mt-4 ms-5">
        <div className="">
            <p>Airport <img src={ra} alt="" /> {airport.name}</p>
        </div>
        <div className="">
            <h3>{airport.name}</h3>
            <InternalProps/>
        </div>
        </div>
        </>

    );
}
