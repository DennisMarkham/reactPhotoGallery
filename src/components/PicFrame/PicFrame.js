import React from "react";
import "./PicFrame.css";

const PicFrame = props => (
  <div>
    <div className="img-container">
      <a href = {props.image}> <img alt={props.title} src={props.image}/> </a>
    </div>
  </div>
);

export default PicFrame;
