import React from "react";
import styled from "styled-components";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import "../styles/styles.css";

export const FooterSection = styled.div`
  width: 100vw;
  height: 200px;
  background: #141414;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Alfa Slab One";
    font-size: 32px;
    color: var(--gold);
    font-weight: 200;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 1390px) {
    padding: 0 100px;

    h1 {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 450px) {
    height: 120px;
    padding: 0 20px;
  }
`;

const style = {
  width: "20px",
  height: "20px",
  color: "#fff",
  marginTop: "10px",
};

function Footer() {
  return (
    <FooterSection>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "350px",
        }}
      ></div>

      <div style={{ padding: "20px 0 15px 0", display: "flex" }}>
        <div
          className="social-icon-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "40px",
            border: "2px solid #fff",
            borderRadius: "20px",
            margin: "0 10px",
          }}
        >
          <a className="footer-social-icon" href="/" style={{ margin: "10px" }}>
            <FiTwitter style={style} />
          </a>
        </div>
        <div
          className="social-icon-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "40px",
            border: "2px solid #fff",
            borderRadius: "20px",
            margin: "0 10px",
          }}
        >
          <a className="footer-social-icon" href="/" style={{ margin: "10px" }}>
            <FiInstagram style={style} />
          </a>
        </div>
        <div
          className="social-icon-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "40px",
            border: "2px solid #fff",
            borderRadius: "20px",
            margin: "0 10px",
          }}
        >
          <a className="footer-social-icon" href="/" style={{ margin: "10px" }}>
            <FaDiscord style={style} />
          </a>
        </div>
      </div>

      <p
        style={{
          fontFamily: "poppins-reg",
          color: "#fff",
          fontSize: "12px",
          paddingBottom: "15px",
          letterSpacing: "1px",
        }}
      >
        ©2021 PIXEL PUSSY
      </p>

      <p className="footer-note" style={{ textAlign: "center", width: "70%" }}>
        <small
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "poppins",
            fontSize: "10px",
          }}
        >
          All explorations for development need time to be realized. The plans
          on the roadmap may also be adjusted with the actual situation (of
          course, we will give full consideration to the views of the
          community). Pixel Pussies are a long-term project. And like any other
          project, there are numerous risks that may lead to failure. Therefore,
          if you don’t trust us, please don’t buy. Even if you have confidence
          in our project， please spend money within your tolerance.
        </small>
      </p>
    </FooterSection>
  );
}

export default Footer;
