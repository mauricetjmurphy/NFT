import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import styled from "styled-components";
import "./navbar.css";

export const Nav = styled.div`
  min-width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-family: montserrat;
  background: #082032;
  color: #cba561;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  color: #cba561;
`;

const style = {
  width: "30px",
  height: "30px",
  margin: "0 10px",
  color: "#cba561",
};

function navbar() {
  return (
    <Nav>
      <BrandContainer>
        <p
          style={{
            fontFamily: "Alfa Slab One",
            fontSize: "2rem",
            color: "#cba561",
          }}
        >
          Pixel Pussy
        </p>
      </BrandContainer>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "0 15px" }}>
          <a href="/">Breeding</a>
        </div>
        <div style={{ padding: "0 15px" }}>
          <a href="/">Rarity</a>
        </div>
        <div style={{ padding: "0 15px" }}>
          <a href="/">Roadmap</a>
        </div>
      </div>
      <SocialContainer>
        <a href="/" style={{ color: "#fff" }}>
          <FiTwitter style={style} />
        </a>
        <a href="/" style={{ color: "#fff" }}>
          <FiInstagram style={style} />
        </a>
        <a href="/" style={{ color: "#fff" }}>
          <FaDiscord style={style} />
        </a>
      </SocialContainer>
    </Nav>
  );
}

export default navbar;
