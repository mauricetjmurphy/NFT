import React from "react";
import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 30px;

  h1 {
    font-family: "Alfa Slab One";
    font-size: 34px;
    padding-bottom: 30px;
    font-weight: 200;
    letter-spacing: 2px;

    @media only screen and (max-width: 1390px) {
      font-size: 28px;
    }
  }

  p {
    font-family: "poppins-reg";
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1px;
    width: 100%;

    @media only screen and (max-width: 1390px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 450px) {
      line-height: 18px;
    }
  }
`;

function TitleSection({ title, content, titleColor, contentColor }) {
  return (
    <TitleContainer>
      <h1
        style={{
          color: titleColor,
        }}
      >
        {title}
      </h1>
      <p style={{ color: contentColor }}>{content}</p>
    </TitleContainer>
  );
}

export default TitleSection;
