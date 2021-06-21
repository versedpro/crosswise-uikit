import React from "react";
import StyledCard, { StyledDiv } from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ ribbon, children, ...props }) => {
  return (
    <StyledDiv {...props}>
      <StyledCard>
        {ribbon}
        {children}
      </StyledCard>
    </StyledDiv>
  );
};
export default Card;
