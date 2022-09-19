import React from "react";
import "../styles.css";
import star from "../images/star.png";

export default function Card(props) {
 
 
  let badgeText;
 if(props.openSpots===0){
  badgeText = "SOLD OUT"
 }
 else if (props.location === "Online")
 {
  badgeText = "Online"
 }

 
 
  return (
    <>
      <div className="container-card">
        {badgeText && <div className="card-badge">{badgeText}</div> }
        <img className="card-image" src={props.coverImg} />
        <div className="card-info">
          <img src={star}  className="card-star"/>
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          {<span className="gray">{props.location}</span>}
        </div>
        <p>{props.title}</p>
        <p><span className="bold">from ${props.price}</span>/person</p>
      </div>
    </>
  );
}
