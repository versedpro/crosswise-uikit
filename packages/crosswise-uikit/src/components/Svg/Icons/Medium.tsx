import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      {/* <g fill="none" fill-rule="evenodd" opacity=".6">
        <g>
          <g>
            <path d="M0 0H24V24H0z" transform="translate(-293.000000, -400.000000) translate(293.000000, 400.000000)"/> */}
      {/* fill="#140129" */}
      <path
        opacity=".6"
        d="M20 2c1.105 0 2 .895 2 2v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h16zM9.244 6.513H5.35v.226l1.254 1.51c.124.112.186.275.17.44v5.938c.036.214-.031.433-.182.59l-1.412 1.712v.225h4.002v-.225l-1.41-1.712c-.153-.156-.225-.374-.195-.59V9.491l3.512 7.663h.408l3.017-7.663V15.6c0 .163 0 .195-.107.301l-1.085 1.054v.225h5.27v-.225l-1.048-1.029c-.093-.07-.139-.186-.12-.3V8.067c-.019-.115.027-.23.12-.301l1.072-1.028v-.226h-3.713l-2.647 6.603-3.01-6.603z"
        transform="translate(-293.000000, -400.000000) translate(293.000000, 400.000000)"
      />
      {/* </g>
        </g>
      </g> */}
    </Svg>
  );
};

export default Icon;
