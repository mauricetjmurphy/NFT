import React from "react";
import styled from "styled-components";
import Icon from "../assets/images/Icon.png";

export const IconContainer = styled.div`
  height: 75px;
  width: 75px;
  border: 1px solid #000;
  border-radius: 100%;
  overflow: hidden;
  background: var(--gold);

  img {
    height: 100%;
    padding: 7.55px 0 0 5px;
  }

  @media only screen and (max-width: 450px) {
    height: 50px;
    width: 50px;
  }
`;

function BrandIcon() {
  return (
    <IconContainer>
      <img src={Icon} alt="" />
    </IconContainer>
  );
}

export default BrandIcon;
