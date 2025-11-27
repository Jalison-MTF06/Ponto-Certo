import React from "react";

export const GearIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={30}
    height={40}
    viewBox="0 0 48 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="white"
      d="M27.7 2.1c-1-2.8-6.4-2.8-7.4 0l-.7 2c-.5 1.5-2.1 2.3-3.5 1.7l-2-.8c-2.7-1-5.5 1.8-4.5 4.5l.8 2c.6 1.4-.2 3-1.7 3.5l-2 .7c-2.8 1-2.8 6.4 0 7.4l2 .7c1.5.5 2.3 2.1 1.7 3.5l-.8 2c-1 2.7 1.8 5.5 4.5 4.5l2-.8c1.4-.6 3 .2 3.5 1.7l.7 2c1 2.8 6.4 2.8 7.4 0l.7-2c.5-1.5 2.1-2.3 3.5-1.7l2 .8c2.7 1 5.5-1.8 4.5-4.5l-.8-2c-.6-1.4.2-3 1.7-3.5l2-.7c2.8-1 2.8-6.4 0-7.4l-2-.7c-1.5-.5-2.3-2.1-1.7-3.5l.8-2c1-2.7-1.8-5.5-4.5-4.5l-2 .8c-1.4.6-3-.2-3.5-1.7l-.7-2zm-3.7 11a6 6 0 110 12 6 6 0 010-12z"
    />
  </svg>
);

export default GearIcon;