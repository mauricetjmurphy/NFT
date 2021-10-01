import React from "react";
import styled from "styled-components";

export const RoadItemContainer = styled.div`
  width: 60%;
`;

export const RoadContentContainer = styled.div`
  padding-left: 50px;

  p {
    color: #cba561;
    font-family: "poppins";
    font-weight: 900;
    line-height: 22px;
    letter-spacing: 1px;
  }
`;

export const PercentageContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #cba561;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #cba561;
  }
`;

function RoadMapItem({ percentage, content, last }) {
  return (
    <RoadItemContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <PercentageContainer>
            <h1>{percentage}</h1>
          </PercentageContainer>
        </div>

        <RoadContentContainer>
          <p>{content}</p>
        </RoadContentContainer>
      </div>

      <div style={{ height: "30px", display: "flex", width: "100px" }}>
        <div
          style={
            last === "True"
              ? { borderRight: "none", width: "50%" }
              : { borderRight: "1px solid #cba561", width: "50%" }
          }
        ></div>
        <div
          style={
            last === "True"
              ? { borderLeft: "none", width: "50%" }
              : { borderLeft: "1px solid #cba561", width: "50%" }
          }
        ></div>
      </div>
    </RoadItemContainer>
  );
}

export default RoadMapItem;
