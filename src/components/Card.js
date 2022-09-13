import React from "react";
import "../styles.css";
import katieZaferes from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <>
      <div className="container-card">
        <img className="card-image" src={katieZaferes} />
        <div className="card-info">
          <img src={star}  className="card-star"/>
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className="bold">from $136</span>/person</p>
      </div>
    </>
  );
}
