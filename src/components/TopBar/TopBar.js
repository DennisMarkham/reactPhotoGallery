import React from "react";
import "./TopBar.css";
import Arrows from "./../Arrows/Arrows";

const TopBar = (props) => (
  <div>
    <h1 id="TopBar"><span id = "title"> {props.title}</span> <span id = "imgNum"> Image #: {props.imgNum + 1}</span></h1>
  </div>
  //I need this to render the state of another component

);

export default TopBar;
