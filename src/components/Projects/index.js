import React from "react";
import "./index.css";
import Separator from "../Separator";
import Browser from "../Browser";
import Twilio from "../../assets/Twilio.png";
import Arrow from "../../assets/right-arrow.svg";

function Projects({ projectsRef }) {
  const Project = ({ projectName, projectObj, projectBrowser }) => (
    <>
      <section className="project-info">
        <h2 className="project-header">
          {projectName}
          <span className="dotColorTheme">.</span>
          <div className="project-role">React Developer</div>
        </h2>
        <p className="project-objective">
          {projectObj}
          <span className="dotColorTheme">.</span>
          <div className="learn-more">
            Learn more{" "}
            <img
              style={{
                height: "5vh",
                width: "5vw",
              }}
              src={Arrow}
              alt="Twilio"
            ></img>
          </div>
        </p>
      </section>
      <section className="project-details">
        <Browser>{projectBrowser}</Browser>
      </section>
    </>
  );

  return (
    <div ref={projectsRef} className="Projects">
      <Project
        projectName={"Contact Center"}
        projectObj={"Business to Business Contact Center"}
        projectBrowser={
          <img
            style={{
              height: "80vh",
              width: "80vw",
              borderBottomLeftRadius: "0.5vw",
              borderBottomRightRadius: "0.5vw",
            }}
            src={Twilio}
            alt="Twilio"
          ></img>
        }
      />
      <Separator />
      <Project
        projectName={"Contact Center"}
        projectObj={"Business to Business Contact Center"}
        projectBrowser={
          <img
            style={{
              height: "80vh",
              width: "80vw",
              borderBottomLeftRadius: "0.5vw",
              borderBottomRightRadius: "0.5vw",
            }}
            src={Twilio}
            alt="Twilio"
          ></img>
        }
      />
      <Separator />
      <Project
        projectName={"Contact Center"}
        projectObj={"Business to Business Contact Center"}
        projectBrowser={
          <img
            style={{
              height: "80vh",
              width: "80vw",
              borderBottomLeftRadius: "0.5vw",
              borderBottomRightRadius: "0.5vw",
            }}
            src={Twilio}
            alt="Twilio"
          ></img>
        }
      />
    </div>
  );
}

export default Projects;
