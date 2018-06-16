import React from "react";
import "./imageCard.css";

const imageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Show:</strong> {props.show}
        </li>
      </ul>
    </div>
    <span onClick={() => props.loadImages(props.id)}>

    </span>
  </div>
);

export default imageCard;
