import React from "react";

const Relogio: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12.5" cy="12.5" r="10" stroke="black" strokeWidth="2"/>
    <line x1="12.5" y1="12.5" x2="12.5" y2="7" stroke="black" strokeWidth="2"/>
    <line x1="12.5" y1="12.5" x2="17" y2="12.5" stroke="black" strokeWidth="2"/>
  </svg>
);

export default Relogio;