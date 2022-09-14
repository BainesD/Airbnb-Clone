import React from "react";
import "../styles.css";
import NavBar from "./NavBar";
import Hero from "../components/Hero";
import Card from "./Card";
import CardData from "./CardData";

export default function App(){
const cards = CardData.map(card => (
    <Card 
        img={card.image}
        rating={card.rating}
        reviewCount={card.reviews}
        country={card.country}
        title={card.title}
        price={card.price}
        />))

    return(
        <>
        <NavBar/>
        <Hero/>
        <section className="cards-list">
        {cards}
        </section>
        </>
    )
}