import React from "react";
import styled from "styled-components";
import TitleSection from "./TitleSection";

import Mario from "../assets/images/mario_pussy.png";
import Napolean from "../assets/images/napolean_pussy.png";
import wallstreetOne from "../assets/images/wallstreet_pussy_1.png";
import wallstreetTwo from "../assets/images/wallstreet_pussy_2.png";

import titleData from "./data/pageTitlesData";
import "../styles/styles.css";

export const RaritySection = styled.div`
  width: 100vw;
  height: 800px;
  background: #334756;
  padding: 0 150px;
  display: flex;
  align-items: center;

  p {
    font-size: 16px;
    font-family: poppins-reg;
    color: #fff;
    letter-spacing: 1px;
    line-height: 22px;
    width: 100%;

    @media only screen and (max-width: 1390px) {
      font-size: 14px;
    }
  }

  .rarity-content {
    padding-bottom: 30px;
  }

  p:first-child {
    padding-top: 0px;
  }

  @media only screen and (max-width: 1390px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 450px) {
    height: 900px;
    padding: 0 20px;
    margin: 0;
  }
`;

function Rarity() {
  return (
    <RaritySection id="rarity">
      <div className="rarity-content">
        <TitleSection
          title={titleData[1].title}
          content={titleData[1].content}
          titleColor={"var(--gold)"}
        />
        <p className="rarity-content">
          Each Pixel Pussy is generated from a total of 27 Gen-0 attribute.
          Produced with a verifiable random function and coded with Blockchain
          ERC721 technology, every cat is 100% unique and stored with proof of
          ownership. With the launch of our smart contract, Pixel Pussies may be
          bought, sold or transferred on the Ethereum network.
        </p>
        <p className="rarity-content">
          Gen-0 cats hold 6 traits that they can pass onto offspring through
          breeding. This might sound a lot like cryptokitties, but Pixel Pussies
          go one big step further. If they wish, users can define their own list
          of preferred traits, which they split with co-parents (50:50), once as
          adopting dame and once as sire.
        </p>
        <p className="rarity-content">
          Three breeding cycles will occur and each time two traits will be
          added to offspring characteristics, giving Gen-3 a total of 12 visible
          traits. There will be no rules to trait selection, leaving genetic
          evolution up to game users.
        </p>
      </div>
      <div className="rare-grid-container">
        <p className="rarity-1">
          Full Character Outfit{" "}
          <span>Very rare. Less than 5 in the collection </span>
        </p>
        <p>
          Collection <span>Only 2000 character combinations </span>
        </p>
        <p>
          Background <span>6 Attributes</span>
        </p>
        <p>
          Body <span>6 Attributes</span>
        </p>

        <img className="rare-img rare-img-1" src={Mario} alt="" />
        <img className="rare-img rare-img-2" src={Napolean} alt="" />
        <img className="rare-img rare-img-3" src={wallstreetOne} alt="" />
        <img className="rare-img rare-img-4" src={wallstreetTwo} alt="" />

        <p>
          Head <span>6 Attributes</span>
        </p>
        <p>
          Mouth <span>3 Attributes</span>
        </p>
        <p>
          Eyes <span>4 Attributes</span>
        </p>
      </div>
    </RaritySection>
  );
}

export default Rarity;
