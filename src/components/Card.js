import React from "react";
import "../styles.css";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <>
      <div className="container-card">
        <img className="card-image" src={props.img} />
        <div className="card-info">
          <img src={star}  className="card-star"/>
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">from ${props.price}</span>/person</p>
      </div>
    </>
  );
}
