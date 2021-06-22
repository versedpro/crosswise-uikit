import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      {/* <path d="M0 0H24V24H0z" transform="translate(-725.000000, -400.000000) translate(725.000000, 400.000000)"/> */}
      {/* fill="#16B8B8" */}
      <path
        fill-rule="nonzero"
        d="M20.852 19.734c1.25 0 1.945-.68 1.945-1.875V6.82c0-1.195-.695-1.883-1.945-1.883h-2.118c-1.25 0-1.937.688-1.937 1.883v11.04c0 1.195.687 1.874 1.937 1.874h2.118zm-7.399 0c1.25 0 1.938-.68 1.938-1.875V9.094c0-1.196-.688-1.875-1.938-1.875h-2.125c-1.242 0-1.937.68-1.937 1.875v8.765c0 1.196.695 1.875 1.937 1.875h2.125zm-7.406 0c1.25 0 1.945-.68 1.945-1.875v-6.476c0-1.195-.695-1.875-1.945-1.875H3.93c-1.243 0-1.938.68-1.938 1.875v6.476c0 1.196.696 1.875 1.938 1.875h2.117z"
        transform="translate(-725.000000, -400.000000) translate(725.000000, 400.000000)"
      />
    </Svg>
  );
};

export default Icon;
