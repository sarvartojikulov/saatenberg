import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M28.014 26.05 19.852 17.9a11.067 11.067 0 1 0-13.764 3.066 11.066 11.066 0 0 0 11.813-1.115l8.148 8.162 1.965-1.965Zm-16.891-6.627A8.3 8.3 0 0 1 9.504 2.988a8.162 8.162 0 0 1 4.8.47 8.3 8.3 0 0 1-3.181 15.965Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);

const SearchIcon = memo(SvgComponent);
export default SearchIcon;
