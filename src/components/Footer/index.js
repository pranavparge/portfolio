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
    </>
  );
}

export default Footer;
