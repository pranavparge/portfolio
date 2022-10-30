import React from "react";
import "./index.css";

function Beam() {
  return (
    <div className="Beam">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="17"
        viewBox="0 0 49 17"
      >
        <polyline
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          points="937 991 960.336 1005.098 983.673 991"
          transform="translate(-936 -990)"
        />
      </svg>
    </div>
  );
}

export default Beam;
