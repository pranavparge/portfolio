import React from "react";
import "./index.css";

function Browser({ children }) {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="column left">
            <span class="dots" style={{ background: "#ED594A" }}></span>
            <span class="dots" style={{ background: "#FDD800" }}></span>
            <span class="dots" style={{ background: "#5AC05A" }}></span>
          </div>
          <div class="column middle">
            <input type="text" value="https://www.project.com" />
          </div>
        </div>

        <div class="content">{children}</div>
      </div>
    </>
  );
}

export default Browser;
