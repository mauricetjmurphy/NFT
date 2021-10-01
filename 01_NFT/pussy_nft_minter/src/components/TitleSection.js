import React from "react";
import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 60%;
  height: auto;
  padding: 40px 0;

  h1 {
    font-family: "poppins";
    padding-bottom: 30px;
    font-weight: 900;
    letter-spacing: 2px;
  }

  p {
    font-family: "poppins";
    font-weight: 900;
    line-height: 22px;
    letter-spacing: 1px;
  }
`;

function TitleSection({ title, content, color }) {
  return (
    <TitleContainer>
      <h1 style={{ color: color }}>{title}</h1>
      <p style={{ color: color }}>{content}</p>
    </TitleContainer>
  );
}

export default TitleSection;
