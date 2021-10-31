import React from "react";
import images from "./data/imageData";
import styled from "styled-components";
import "../styles/styles.css";

export const BannerContainer = styled.div`
  border-top: 4px solid #141414;
  border-bottom: 4px solid #141414;
  display: flex;
  height: 400px;
  width: 200vw;
  overflow: hidden;
  animation: scrolling 60s linear infinite;

  @media only screen and (max-width: 450px) {
    display: none;
`;

export const Collage = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 0;
`;

function PussyWall() {
  return (
    <BannerContainer>
      <Collage>
        {images.map((image, i) => (
          <img className="grid-item" key={i} src={image} alt="" />
        ))}
      </Collage>
      <Collage>
        {images.map((image, i) => (
          <img className="grid-item" key={i + 100} src={image} alt="" />
        ))}
      </Collage>
    </BannerContainer>
  );
}

export default PussyWall;
