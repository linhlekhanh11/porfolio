import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectData } from "../Project";
import coinbaseLogo from "../assets/coinbase-logo.svg";
import amberfloLogo from "../assets/amberflo-logo.svg";
import fanLabLogo from "../assets/fan-lab-logo.svg";
const Project = () => {
  const logo = [fanLabLogo, amberfloLogo, coinbaseLogo, coinbaseLogo];
  return (
    <>
      <h3 className="title">My latest Project</h3>
      <div className="ProjectContainer">
        <div className="project">
          {ProjectData.map((data, key) => {
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
  );
};

export default Project;
