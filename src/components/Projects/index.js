import React from "react";
import "./index.css";
import Separator from "../Separator";
import Browser from "../Browser";
import Twilio from "../../assets/Twilio.png";
import Bank from "../../assets/Bank.png";
import Arrow from "../../assets/right-arrow.svg";
import ReactLogo from "../../assets/react-logo.svg";
import Typewriter from "typewriter-effect";

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
          <img className="project-img" src={Twilio} alt="Twilio"></img>
        }
      />
      <Separator />
      <Project
        projectName={"Payments"}
        projectObj={"Payments Portal for a Bank"}
        projectBrowser={
          <img
            style={{ height: "80vh" }}
            className="project-img"
            src={Bank}
            alt="Bank"
          ></img>
        }
      />
      <Separator />
      <Project
        projectName={"Mainframe to React Migration"}
        projectObj={"Bank Administration website"}
        projectBrowser={
          <div
            style={{
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2afa05",
              fontSize: "calc(5vw + 2vmin)",
            }}
            className="project-img"
          >
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter.typeString("Mainframe").start().pauseFor(5000);
              }}
            />
            <span style={{ margin: "0 0 0 5vw", color: "white" }}>-&gt;</span>
            <img
              src={ReactLogo}
              className="react-logo App-logo"
              alt="React logo"
            />
          </div>
        }
      />
    </div>
  );
}

export default Projects;
