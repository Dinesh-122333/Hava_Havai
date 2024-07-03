import React from "react";
import img from "../assets/profile.png"
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();
    function onhandlePress(){
        navigate("/");
    }
    return(
        <>
        <nav className="navbar shadow">
        <div className="container-fluid">
            <h3 className="" onClick={onhandlePress} style={{cursor:"pointer"}}>
            hava havai
            </h3>
            <img src={img} className="" alt="" />
        </div>
        </nav>
        </>
    )
}