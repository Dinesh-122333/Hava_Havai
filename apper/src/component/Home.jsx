import React from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import Airports from "./Airports";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container-fluid vh-100">
                <div className="row h-100">
                    <section className="col-md-2 shadow h-100 pt-4">
                        <Sidemenu />
                    </section>
                    <section className="col-md-10 p-4">
                        <Airports />
                    </section>
                </div>
            </div>
        </>
    );
}
