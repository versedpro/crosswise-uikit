import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardSeperatorProps = SpaceProps;

const CardSeperator = styled.div<CardSeperatorProps>`
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.12) 51%,
    rgba(255, 255, 255, 0.02)
  );
  border-image-slice: 1;
  height: 1px;
  ${space}
`;

CardSeperator.defaultProps = {
  mx: "24px",
};

export default CardSeperator;
