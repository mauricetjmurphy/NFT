import React from "react";
import styled from "styled-components";
import { FiTwitter } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import openseaIcon from "../assets/images/opensea.png";

export const SocialContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialItem = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 25px;
  margin: 0 10px;

  padding: 0px !important;

  svg,
  img {
    margin-bottom: 30px !important;
    color: var(--gold);
    width: 30px;
  }

  &:hover {
    background: var(--gold);
  }
`;

function SocialMedia() {
  return (
    <SocialContainer>
      <SocialItem
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/PixelPussNFT"
      >
        <FiTwitter />
      </SocialItem>

      <SocialItem
        target="_blank"
        rel="noreferrer"
        href="https://discord.com/channels/895133506211029042/895141616879276142"
      >
        <FaDiscord />
      </SocialItem>
      <SocialItem
        target="_blank"
        rel="noreferrer"
        href="https://opensea.io/collection/the-pixel-pussy"
      >
        <img style={{ width: "30px" }} src={openseaIcon} alt="" />
      </SocialItem>
    </SocialContainer>
  );
}

export default SocialMedia;
