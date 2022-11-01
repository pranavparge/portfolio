import React from "react";
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
          stroke="#fff"
          strokeWidth="2"
          points="937 991 960.336 1005.098 983.673 991"
          transform="translate(-936 -990)"
        />
      </svg>

      <div className="toTop" onClick={scrollToTop}>
        Back to top
      </div>

      <footer className="Footer">
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
          pranavparge@gmail.com
        </a>
        <a
          className="footerItem"
          href="https://drive.google.com/file/d/12RiYLr7BI0ouZLBf-HX2EfaQ_ZTcJmKR/view?usp=sharing"
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
