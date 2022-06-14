import React from "react";
import styled from "styled-components";
import { CrosswiseRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  crssPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CrssPrice: React.FC<Props> = ({ crssPriceUsd }) => {
  return crssPriceUsd ? (
    <PriceLink href="#" target="_blank">
      <CrosswiseRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${crssPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CrssPrice);
