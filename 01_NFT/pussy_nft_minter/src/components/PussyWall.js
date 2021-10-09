import React from "react";
import styled from "styled-components";
import images from "./data/imageData";
import "../styles/styles.css";

function PussyWall() {
  return (
    <div className="banner-container">
      <div className="grid-container">
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            background: "#000",
            width: "200%",
            height: "100%",
            opacity: "10%",
          }}
        ></div>
        {images.map((image, i) => (
          <img key={i} className="grid-item grid-item-1" src={image} alt="" />
        ))}
        {images.map((image, i) => (
          <img
            key={i + 100}
            className="grid-item grid-item-1"
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default PussyWall;
