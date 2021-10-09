import React from "react";
import ImageFlicker from "./ImageFlicker";
import styled from "styled-components";
import "../styles/styles.css";

export const IntroSection = styled.div`
  height: 400px;
  background: #334756;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 250px;
  minwidth: 100vw;

  h1 {
    padding-bottom: 30px;
    font-size: 34px;
    font-family: "Alfa Slab One";
    font-weight: 200;
    color: var(--gold);
    letter-spacing: 1px;

    @media only screen and (max-width: 450px) {
      padding: 30px 0 20px 0;
    }
  }

  p {
    text-align: center;
    font-family: "poppins-reg";
    font-size: 16px;
    font-weight: 200;
    color: #fff;
    letter-spacing: 0.5px;
    line-height: 1.6rem;

    @media only screen and (max-width: 450px) {
      text-align: left;
    }
  }

  @media only screen and (max-width: 1390px) {
    padding: 0 100px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    height: 1000px;
    padding: 0 20px;
    margin: 0;
  }
`;

function Intro() {
  return (
    <IntroSection>
      <div className="intro-content-container">
        <h1>Introducing...</h1>
        <p>
          The first of its kind, a digital world of pixel pussies, where NFT
          owners will be able to breed three additional generations (Gen-1,
          Gen-2, Gen-3) of customizable NFT characters from a preferred list of
          traits. This minting process will grant full commercial ownership of
          NFT design to users, with royalties of secondary sales and profit
          sharing of merchandise contributing to community wallet. In the Pixel
          Pussies ‘Blockchain’ game, users can collect and breed pixel pussies
          in a universe made by digital cats and governed by digital cats. Each
          cat will be randomly generated and stored as ERC721 TOKENS and the art
          is hosted on IPFS. These super rare cats will be the first generation
          (Gen-0) of pixel pussies who will get to vote on key early game
          development and design. Using CatFood ERC20 tokens, users will also
          get to vote on investment decisions in the community Kitty Bank.
        </p>
      </div>
      <ImageFlicker />
    </IntroSection>
  );
}

export default Intro;
