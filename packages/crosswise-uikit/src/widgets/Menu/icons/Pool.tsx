import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.883c.352 0 .68-.133 1.117-.383l6.04-3.5c.687-.406 1.015-.766 1.015-1.32 0-.563-.328-.922-1.016-1.328l-6.039-3.5c-.437-.25-.765-.383-1.117-.383s-.68.133-1.125.383l-6.031 3.5c-.688.406-1.016.765-1.016 1.328 0 .554.328.914 1.016 1.32l6.031 3.5c.445.25.773.383 1.125.383zM12 12c-.094 0-.18-.031-.29-.094L6.14 8.75c-.03-.016-.054-.04-.054-.07 0-.04.023-.063.055-.078l5.57-3.157c.11-.062.195-.093.289-.093.094 0 .18.03.29.093l5.57 3.157c.03.015.046.039.046.078 0 .03-.015.054-.047.07l-5.57 3.156c-.11.063-.195.094-.289.094zm0 5.773c.328 0 .617-.148 1.023-.39l6.446-3.781c.46-.274.71-.618.71-1.047 0-.43-.257-.766-.577-.97l-7.024 4.08c-.226.132-.406.218-.578.218-.18 0-.352-.086-.586-.219l-7.016-4.078c-.32.203-.578.539-.578.969 0 .43.258.78.711 1.047l6.446 3.78c.406.243.695.391 1.023.391zm0 3.696c.328 0 .617-.149 1.023-.39l6.446-3.782c.453-.266.71-.617.71-1.055 0-.422-.257-.758-.577-.96l-7.024 4.077c-.226.133-.406.22-.578.22-.18 0-.352-.087-.586-.22l-7.016-4.078c-.32.203-.578.54-.578.961 0 .438.258.79.711 1.055l6.446 3.781c.406.242.695.39 1.023.39z"
      />
    </Svg>
  );
};

export default Icon;
