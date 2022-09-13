import React from "react";
import "../styles.css";
import airbnbLogo from "../images/airbnb-logo.png"

export default function NavBar(){
    return(
        <>
        <nav className="navbar">
            <img className="logo-navbar" src={airbnbLogo}/>
        </nav>
        </>
    )
}