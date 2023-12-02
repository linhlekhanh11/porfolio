import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import coinbaseLogo from "../assets/coinbase-logo.svg";
import amberfloLogo from "../assets/amberflo-logo.svg";



export default function ProjectCard(props) {
  return (
    <div className="card">
      <Link to={props.website} target="_blank">
        <img src={props.logo}></img>
      </Link>
      <h1>{props.position}</h1>
      <p>{props.period}</p>
    </div>
  );
}
