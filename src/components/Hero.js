import React from "react";
import "../styles.css";
import photoGrid from "../images/photo-grid.png";

export default function Hero(){
    return(
        <>
        <section className="container-hero">
            <img className="hero-photo" src={photoGrid}/>
            <h1 className="hero-head">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
        </>
    )
}