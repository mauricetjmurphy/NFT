import React from "react";
import styled from "styled-components";
import Image from "../assets/images/charity.png";

export const CharityContainer = styled.div`
  height: 500px;
  width: 100vw;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 200px;
  background: #334756;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    height: 475px;
  }
`;

export const CharityContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
  font-family: "poppins-reg";
  color: #fff;

  h1 {
    padding: 30px 0;
    color: var(--gold);
    font-size: 34px;
    font-family: Alfa Slab One;
    letter-spacing: 1px;
    font-weight: 200;
  }

  p {
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    order: 2;
    width: 90%;
    padding: 0;
    margin: 0;

    h1 {
      text-align: center;
      font-size: 28px;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }
`;

export const CharityImg = styled.div`
  width: 50%;
  height: 80%
  alignitems: center;

  img {
    width: 100%;
    border-radius: 50px;
  }

  @media only screen and (max-width: 450px) {
    width:100%;
    order: 1;

    img {
      width: 100%;
      border-radius: 0px;
    }
  }
`;

function Charity() {
  return (
    <CharityContainer>
      <CharityContent>
        <h1>Support a good cause</h1>
        <p>
          10% of proceeds will go to Doctors Without Borders. They are an
          international humanitarian medical non-governmental organisation of
          French origin best known for its projects in conflict zones and in
          countries affected by endemic diseases.
        </p>
      </CharityContent>
      <CharityImg>
        <img src={Image} alt="" />
      </CharityImg>
    </CharityContainer>
  );
}

export default Charity;
