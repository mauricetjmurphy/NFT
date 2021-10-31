import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import RoadMap from "./components/RoadMap";
import Rarity from "./components/Rarity";
import PussyDream from "./components/PussyDream";
import Footer from "./components/Footer";
import PussyWall from "./components/PussyWall";
import Charity from "./components/Charity";
import FAQ from "./components/FAQ";

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 350px;
    height: 350px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <RoadMap />
      <PussyWall />
      <Rarity />
      <PussyDream />
      <Charity />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
