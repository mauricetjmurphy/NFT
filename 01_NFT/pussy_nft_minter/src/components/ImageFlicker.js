import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import images from "./data/imageData";

export const ImageContainer = styled.div`
  height: 250px;
  border: 6px solid #082032;
  border-radius: 10px;

  img {
    height: 100%;
    border-radius: 5px;
  }
`;

function ImageFlicker() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageContainer>
      <img src={currentImage} alt="" />
    </ImageContainer>
  );
}

export default ImageFlicker;
