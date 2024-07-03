import React, { useState, useEffect } from "react";
import air from "../assets/Air.png";
import edit from "../assets/edit.png";
import del from "../assets/del.png";
import { getAirports, addAirport, deleteAirport } from "../database/mockDB.js";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Airports() {
    const [airports, setAirports] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setAirports(getAirports());
    }, []);

    const handleAdd = () => {
        const newAirport = {
            name: "New Airport",
            country: "Country",
            code: "CODE",
            terminal: "T1",
        };
        addAirport(newAirport);
        setAirports(getAirports());
    };

    const handleDelete = (id) => {
        deleteAirport(id);
        setAirports(getAirports());
    };

    const handleRedirect = (id) => {
        navigate(`/airport/${id}`);
    };

    return (
        <>
            <div className="m-5 d-flex align-items-center">
                <h3>Airports</h3>
                <button className="btn btn-outline-dark rounded-pill ms-auto" onClick={handleAdd}>
                    + Add new
                </button>
            </div>
            <div className="table-responsive m-5">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        All Airports <img src={air} alt="" className="" />
                                    </label>
                                </div>
                            </th>
                            <th>Country</th>
                            <th>Code</th>
                            <th>Terminal</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {airports.map((airport) => (
                            <tr className="border rounded" key={airport.id}>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault" onClick={() => handleRedirect(airport.id)} style={{cursor: 'pointer'}}>
                                            {airport.name}
                                        </label>
                                    </div>
                                </td>
                                <td>{airport.country}</td>
                                <td>{airport.code}</td>
                                <td>{airport.terminal}</td>
                                <td>
                                    <button className="btn btn-link p-0 me-2">
                                        <img src={edit} alt="" />
                                    </button>
                                    <button className="btn btn-link p-0" onClick={() => handleDelete(airport.id)}>
                                        <img src={del} alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
