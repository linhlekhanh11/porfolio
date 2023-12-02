import React from "react";
import ProjectCard from "../components/ProjectCard";
import { experienceData } from "../experience";
import coinbaseLogo from "../assets/coinbase-logo.svg";
import amberfloLogo from "../assets/amberflo-logo.svg";
import fanLabLogo from "../assets/fan-lab-logo.svg";
const Experience = () => {
    const logo = [fanLabLogo, amberfloLogo, coinbaseLogo, coinbaseLogo];
    return (
        <>
         <h3 className="title">My latest experience</h3>
        <div className="experienceContainer">
        <div className="project">
          {experienceData.map((data, key) => {
            return (  
                <ProjectCard
                    key={key}
                    position={data.position}
                    period={data.period}
                    logo={logo[key]}
                    website={data.website}
                />
            );
          })}
        </div>
        {/* <KeyboardArrowRightIcon fontSize="large" className="arrow"/> */}
      </div>
        </>
    )
}

export default Experience;