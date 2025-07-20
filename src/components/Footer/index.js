import React from "react";
import Separator from "../Separator";
import "./index.css";

function Footer() {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <svg
        className="arrowDown"
        onClick={scrollToTop}
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="17"
        viewBox="0 0 49 17"
      >
        <polyline
          fill="none"
          stroke="#000"
          strokeWidth="2"
          points="937 991 960.336 1005.098 983.673 991"
          transform="translate(-936 -990)"
        />
      </svg>

      <div className="toTop" onClick={scrollToTop}>
        Back to top
      </div>

      <Separator style={{ marginBottom: "1vh", marginTop: "10vh" }} />

      <footer className="Footer">
        <h1 className="contact-header">
          Contact<span className="dotColorTheme">.</span>
        </h1>
        <a
          className="footerItem"
          href="https://www.linkedin.com/in/pranavparge"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="footerItem"
          href="mailto:pranavparge@gmail.com?subject=Hello Pranav"
        >
          Email
        </a>
        <a
          className="footerItem"
          href="https://drive.google.com/file/d/19YDLSdOZvLW8a6Msqi2k92iWMpStgkLf/view?usp=drive_link"
          download="resume-pranav"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </footer>
    </>
  );
}

export default Footer;
