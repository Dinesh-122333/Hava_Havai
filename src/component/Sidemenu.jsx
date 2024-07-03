import React from "react";
import home from "../assets/home.png"
import dash from "../assets/dash.png"

export default function Sidemenu(){
    function onServices(){

    }
    function onAirport(){

    }
    function onVideo(){

    }
    return(
        <>
        <div className="">
            <div className="d-flex align-items-center py-3 px-4">
                <img src={home} className="me-3" alt="" />
                <p className="mb-0">Home</p>
                
            </div>
            <div className="d-flex align-items-center  py-2 px-4">
                <img src={dash} className="me-3" alt="" />
                <p className="mb-0">Dashboard</p>

            </div>
        </div>
        <div className="m-4">
            <div className="">
                <p className="h6 sidemenu py-1" onClick = {onServices}>Services</p>
                <p className="sidemenu py-1" onClick={onAirport}>Airports</p>
                <p className="sidemenu py-1" onClick={onVideo}>Videos</p>
            </div>
        </div>
        <div className="m-4">
            <div className="pb-5">
                <p className="h6">Others</p>
                <p>List1</p>
                <p>List2</p>
                <p>List3</p>
            </div>
        </div>
        

        </>
    )
}