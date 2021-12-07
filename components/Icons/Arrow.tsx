import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M0 0v21.985l19-11.007L0 0Z" fill="#000" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h19v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Arrow = memo(SvgComponent);
export default Arrow;
