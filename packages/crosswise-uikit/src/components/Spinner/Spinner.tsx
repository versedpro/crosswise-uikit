import React from "react";
import styled from "styled-components";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <img src={require("./spinner.gif")} width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
