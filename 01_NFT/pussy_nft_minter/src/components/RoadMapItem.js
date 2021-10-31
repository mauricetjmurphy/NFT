import React from "react";
import styled from "styled-components";

export const RoadItemContainer = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 450px) {
    width: 100%;
    margin: 0 !important;
  }
`;

export const RoadContentContainer = styled.div`
  font-family: poppins-reg;
  color: var(--gold);
  font-size: 16px;

  @media only screen and (max-width: 450px) {
    font-size: 14px;
    padding: 0 15px !important;
    text-align: left !important;
  }
`;

export const PercentageContainer = styled.div`
  height: 100px;
  min-width: 100px;
  border: 2px solid var(--gold);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins-reg;
  color: var(--gold);
  font-size: 26px;

  @media only screen and (max-width: 450px) {
    height: 50px;
    min-width: 50px;
    font-size: 18px;
    order: 1 !important;
  }
`;

function RoadMapItemTemp({ percentage, content, position }) {
  return (
    <RoadItemContainer
      style={position === "right" ? { marginLeft: "50%" } : { marginRight: "0" }}
    >
      <PercentageContainer
        style={position === "right" ? { order: "1" } : { order: "2" }}
      >
        {percentage}
      </PercentageContainer>
      <RoadContentContainer
        style={
          position === "right"
            ? { order: "2", paddingLeft: "30px", textAlign: "left" }
            : { order: "1", paddingRight: "30px", textAlign: "right" }
        }
      >
        {content}
      </RoadContentContainer>
    </RoadItemContainer>
  );
}

export default RoadMapItemTemp;
