import React from "react";

const Prancheta: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 17 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="3" width="12" height="16" rx="2" stroke="black" strokeWidth="2"/>
    <rect x="6" y="1" width="7" height="3" rx="1" stroke="black" strokeWidth="2"/>
  </svg>
);

export default Prancheta;