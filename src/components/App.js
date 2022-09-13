import React from "react";
import "../styles.css";
import NavBar from "./NavBar";
import Hero from "../components/Hero";
import Card from "./Card";

export default function App(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <Card/>
        </>
    )
}