import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#413e53";
  return (
    <Svg viewBox="0 0 160 32" {...props}>
      <defs>
        <linearGradient id="l5n1lq9z5a" x1="89.286%" x2="1.791%" y1="49.997%" y2="49.997%">
          <stop offset="0%" stop-color="#3F81EF" />
          <stop offset="100%" stop-color="#03F9AE" />
        </linearGradient>
        <linearGradient id="1jzbflm4vb" x1="75.888%" x2="-11.606%" y1="50.003%" y2="50.003%">
          <stop offset="0%" stop-color="#3F81EF" />
          <stop offset="100%" stop-color="#9547F5" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <path
              fill={textColor}
              fill-rule="nonzero"
              d="M44.294 23.538c2.164 0 3.873-.962 4.619-2.621l-2.32-1.275c-.556 1.004-1.377 1.427-2.32 1.427-1.512 0-2.703-1.059-2.703-2.871 0-1.813 1.191-2.872 2.703-2.872.943 0 1.764.441 2.32 1.424l2.32-1.253c-.746-1.695-2.455-2.64-4.619-2.64-3.355 0-5.75 2.216-5.75 5.34 0 3.126 2.395 5.341 5.75 5.341zm9.389-9.16V13.01h-2.855v10.375h2.99v-4.899c0-1.986 1.094-2.892 2.74-2.892.232 0 .421.02.67.038v-2.774c-1.588 0-2.817.52-3.545 1.52zm10.331 9.16c3.276 0 5.654-2.215 5.654-5.34s-2.378-5.34-5.654-5.34c-3.279 0-5.674 2.215-5.674 5.34s2.395 5.34 5.674 5.34zm0-2.469c-1.498 0-2.647-1.08-2.647-2.871 0-1.795 1.15-2.872 2.647-2.872 1.495 0 2.624 1.077 2.624 2.872 0 1.792-1.129 2.871-2.624 2.871zm11.315 2.47c3.086 0 4.868-1.369 4.868-3.296 0-4.09-6.231-2.371-6.231-4.146 0-.541.576-.965 1.92-.965.938 0 1.953.194 2.968.77l.997-2.138c-.977-.58-2.547-.906-3.966-.906-3.01 0-4.774 1.389-4.774 3.354 0 4.146 6.23 2.41 6.23 4.107 0 .577-.517.945-1.898.945-1.266 0-2.664-.406-3.586-1.004l-.994 2.16c.956.636 2.72 1.118 4.466 1.118zm10.373 0c3.086 0 4.87-1.369 4.87-3.296 0-4.09-6.23-2.371-6.23-4.146 0-.541.573-.965 1.916-.965.939 0 1.957.194 2.972.77l.998-2.138c-.98-.58-2.551-.906-3.97-.906-3.01 0-4.774 1.389-4.774 3.354 0 4.146 6.23 2.41 6.23 4.107 0 .577-.517.945-1.898.945-1.263 0-2.661-.406-3.583-1.004l-.997 2.16c.96.636 2.723 1.118 4.466 1.118zm20.635-10.529l-2.51 7.021-2.453-7.02h-2.53l-2.53 7.02-2.434-7.02h-2.82l3.72 10.374h2.876l2.396-6.44 2.32 6.44h2.875l3.734-10.375h-2.644zm5.723-1.444c1.112 0 1.861-.733 1.861-1.736 0-.927-.749-1.622-1.86-1.622-1.112 0-1.861.733-1.861 1.68 0 .945.749 1.678 1.86 1.678zm-1.494 11.82h2.99V13.01h-2.99v10.375zm9.427.152c3.086 0 4.867-1.368 4.867-3.295 0-4.09-6.23-2.371-6.23-4.146 0-.541.576-.965 1.919-.965.938 0 1.953.194 2.968.77l.998-2.138c-.977-.58-2.548-.906-3.966-.906-3.01 0-4.774 1.389-4.774 3.354 0 4.146 6.23 2.41 6.23 4.107 0 .577-.518.945-1.898.945-1.267 0-2.665-.406-3.583-1.004l-.998 2.16c.956.636 2.72 1.118 4.467 1.118zM137 18.236c0-3.337-2.34-5.378-5.368-5.378-3.144 0-5.502 2.236-5.502 5.34 0 3.083 2.32 5.34 5.886 5.34 1.86 0 3.296-.576 4.256-1.677l-1.592-1.736c-.71.677-1.494 1.003-2.589 1.003-1.57 0-2.664-.791-2.95-2.083h7.8c.021-.25.059-.576.059-.809zm-5.35-3.104c1.342 0 2.32.847 2.53 2.16h-5.078c.21-1.33 1.188-2.16 2.548-2.16z"
              transform="translate(-16.000000, -8.000000) translate(16.000000, 8.000000)"
            />
            <path
              fill="url(#l5n1lq9z5a)"
              d="M25.288 0c3.604 0 6.524 2.938 6.524 6.562v9.848c0 3.625-2.92 6.566-6.524 6.566H9.382v-4.924h15.906c.901 0 1.63-.736 1.63-1.642V6.562c0-.906-.729-1.638-1.63-1.638h-9.79c-.9 0-1.632.732-1.632 1.638v6.566H8.971V6.562C8.971 2.938 11.895 0 15.5 0h9.79z"
              transform="translate(-16.000000, -8.000000) translate(16.000000, 8.000000)"
            />
            <path
              fill="url(#1jzbflm4vb)"
              d="M17.946 25.438v-2.462h4.895v2.462c0 3.624-2.924 6.562-6.528 6.562H6.524C2.92 32 0 29.062 0 25.438V15.59c0-3.625 2.92-6.566 6.524-6.566H22.43v4.924H6.524c-.901 0-1.63.736-1.63 1.642v9.848c0 .906.729 1.638 1.63 1.638h9.79c.9 0 1.632-.732 1.632-1.638z"
              transform="translate(-16.000000, -8.000000) translate(16.000000, 8.000000)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
