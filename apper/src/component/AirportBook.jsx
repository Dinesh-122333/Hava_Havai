import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import AirportDetail from "./AirportDetials";

export default function AirportBook() {
    const { id } = useParams();

    return (
        <>
            <Navbar />
            <div className="container-fluid vh-100">
                <div className="row h-100">
                    <section className="col-md-2 shadow h-100 pt-4">
                        <Sidemenu />
                    </section>
                    <section className="col-md-9 ">
                        <AirportDetail airportId={id} />
                    </section>
                </div>
            </div>
        </>
    );
}
