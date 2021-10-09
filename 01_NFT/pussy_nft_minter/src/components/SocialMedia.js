import React from "react";
import styled from "styled-components";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const SocialContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialItem = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 17.5px;
  margin: 0 10px;

  &:hover {
    background: var(--gold);
  }
`;

function SocialMedia() {
  return (
    <SocialContainer>
      <SocialItem>
        <FiTwitter />
      </SocialItem>
      <SocialItem>
        <FiInstagram />
      </SocialItem>
      <SocialItem>
        <FaDiscord />
      </SocialItem>
    </SocialContainer>
  );
}

export default SocialMedia;
