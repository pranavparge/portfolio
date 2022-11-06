import React from "react";
import "./index.css";

function Browser({ children }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column left">
            <span className="dots" style={{ background: "#ED594A" }}></span>
            <span className="dots" style={{ background: "#FDD800" }}></span>
            <span className="dots" style={{ background: "#5AC05A" }}></span>
          </div>
          <div className="column middle">
            <input type="text" defaultValue="https://www.project.com" />
          </div>
        </div>

        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default Browser;
