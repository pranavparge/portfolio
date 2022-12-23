import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";
import Project from "./project";
import Separator from "../Separator";
import Twilio from "../../assets/Twilio.png";
import Bank from "../../assets/Bank.png";
import ReactLogo from "../../assets/react-logo.svg";

function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef} className="Projects">
      <Project
        projectName={"Contact Center"}
        projectObj={"Business to Business Contact Center"}
        projectRole={"Twilio and React Developer"}
        projectSize={"5"}
        projectStack={"React and Twilio"}
        projectDescription={
          "A contact center to be used by the agents to handle all customer related queries. Powered using the many solutions provided by Twilio. It enables the agent to handle calls, web-chats, callback and voicemail tasks over 37 countries. Twilio drives these various functionalities of communications and allows creation of plugins using React."
        }
        projectBrowser={
          <img className="project-img" src={Twilio} alt="Twilio"></img>
        }
      />
      <Separator style={{ margin: "1em 0 1em 0" }} />
      <Project
        projectName={"Payments Portal"}
        projectObj={"Payments Portal for a International Bank"}
        projectRole={"React Developer"}
        projectSize={"3"}
        projectStack={"Frontend: React | Backend: Java"}
        projectDescription={
          "International bank, in need of a payments gateway which would work specifically for high-level transcations. Leveraged by bank clients with big investments."
        }
        projectBrowser={
          <img
            style={{ height: "80vh" }}
            className="project-img"
            src={Bank}
            alt="Bank"
          ></img>
        }
      />
      <Separator style={{ margin: "1em 0 1em 0" }} />
      <Project
        projectName={"Mainframe to React Migration"}
        projectObj={"International Bank Administration website"}
        projectRole={"React Developer"}
        projectSize={"10"}
        projectStack={"Frontend: React | Backend: Java"}
        projectDescription={
          "International bank needed to transform their legacy system coded in COBOL to a user-efficient React website."
        }
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
