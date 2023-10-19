import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import BestSeller from "./Components/BestSeller";

export default function Landing() {
    return (
        <div>
            <NavBar />
            <Hero />
            <BestSeller />
        </div>
    )
}