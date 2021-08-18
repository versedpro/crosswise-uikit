import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g fillRule="nonzero" opacity=".6">
        <path
          d="M8.333 5c1.841 0 3.334 1.492 3.334 3.333 0 1.841-1.493 3.334-3.334 3.334C6.493 11.667 5 10.174 5 8.333 5 6.493 6.492 5 8.333 5m0 1.667c-.92 0-1.666.746-1.666 1.666 0 .92.746 1.667 1.666 1.667C9.253 10 10 9.254 10 8.333c0-.92-.746-1.666-1.667-1.666m-2.083 9.65l-.308-2.209c-.525-.208-.975-.491-1.409-.825l-2.075.842c-.183.067-.408 0-.508-.183L.283 11.058c-.108-.183-.058-.408.1-.533l1.759-1.383-.059-.809.059-.833L.383 6.142c-.158-.125-.208-.35-.1-.534L1.95 2.725c.1-.183.325-.258.508-.183l2.075.833c.434-.325.884-.608 1.409-.817L6.25.35c.033-.2.208-.35.417-.35H10c.208 0 .383.15.417.35l.308 2.208c.525.209.975.492 1.408.817l2.075-.833c.184-.075.409 0 .509.183l1.666 2.883c.109.184.059.409-.1.534L14.525 7.5l.058.833-.058.834 1.758 1.358c.159.125.209.35.1.533l-1.666 2.884c-.1.183-.325.258-.509.183l-2.075-.833c-.433.325-.883.608-1.408.816l-.308 2.209c-.034.2-.209.35-.417.35H6.667c-.209 0-.384-.15-.417-.35zm1.458-14.65L7.4 3.842c-1 .208-1.883.741-2.525 1.483l-2.008-.867-.625 1.084L4 6.833c-.333.975-.333 2.034 0 3l-1.767 1.3.625 1.084 2.025-.867c.642.733 1.517 1.267 2.509 1.467L7.7 15h1.267l.308-2.175c.992-.208 1.867-.742 2.508-1.475l2.025.867.625-1.084-1.766-1.291c.333-.975.333-2.034 0-3.009l1.758-1.291-.625-1.084-2.008.867c-.642-.742-1.525-1.275-2.525-1.475l-.309-2.183h-1.25z"
          transform="translate(-781.000000, -616.000000) translate(781.000000, 616.000000) translate(1.666667, 1.666667)"
        />
      </g>
    </Svg>
  );
};

export default Icon;
