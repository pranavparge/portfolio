import React from "react";
import "./index.css";

function Portfolio({ portfolioRef }) {
  return (
    <div ref={portfolioRef} className="Portfolio">
      Hello again ! <br />
      My name is Pranav Parge. <br />I am a "Front-end Developer" based in
      Pune,India.
    </div>
  );
}

export default Portfolio;
