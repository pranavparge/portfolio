import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="Footer">
      <div
        className="email"
        onClick={(e) => {
          window.location.href = "mailto:pranavparge@gmail.com";
          e.preventDefault();
        }}
      >
        pranavparge@gmail.com
      </div>
    </div>
  );
}

export default Footer;
