import React, { useState, useEffect } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import Menu from "../assets/images/hamburger_icon.svg";
import styled from "styled-components";
import "../styles/styles.css";
import BrandIcon from "./BrandIcon";
import * as s from "react-scroll";
import { Link } from "react-scroll";
import DropdownNav from "./DropdownNav";
import openseaIcon from "../assets/images/opensea.png";

import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { useSelector, useDispatch } from "react-redux";

export const Nav = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-family: montserrat;
  background: #082032;
  position: fixed;
  z-index: 10;

  @media only screen and (max-width: 450px) {
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 350px;

  p {
    font-family: "Alfa Slab One";
    font-size: 2.5rem;
    color: var(--gold);
    cursor: pointer;
  }

  @media only screen and (max-width: 450px) {
    min-width: auto;
    p {
      font-size: 30px;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 1390px) {
    display: none;
  }
`;

export const SocialContainer = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 200px;

  @media only screen and (max-width: 1390px) {
    display: none;
  }
`;

export const WalletConnect = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: poppins-reg;
  border: 2px solid var(--gold);
  border-radius: 20px;
  margin-right: 30px;

  &:hover {
    background: var(--gold);
    opacity: 40;
    border: 2px solid #fff;
  }
`;

const style = {
  width: "30px",
  height: "30px",
  margin: "0 10px",
  color: "var(--gold)",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  const toggleHome = () => {
    s.scrollToTop();
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <Nav>
      <BrandContainer>
        <BrandIcon onClick={() => toggleHome} />
        {/* <p onClick={() => toggleHome} style={{}}>
          Pixel Pussies
        </p> */}
      </BrandContainer>

      <LinkContainer>
        <div style={{ padding: "0 15px" }}>
          <Link
            className="nav-link"
            to="roadmap"
            smooth={true}
            offset={-80}
            duration={1000}
          >
            ROADMAP
          </Link>
        </div>
        <div style={{ padding: "0 15px" }}>
          <Link
            className="nav-link"
            to="rarity"
            smooth={true}
            offset={0}
            duration={1000}
          >
            RARITY
          </Link>
        </div>
        <div style={{ padding: "0 15px" }}>
          <Link
            className="nav-link"
            to="rarity"
            smooth={true}
            offset={0}
            duration={1000}
          >
            BREEDING
          </Link>
        </div>
        <div style={{ padding: "0 15px" }}>
          <Link
            className="nav-link"
            to="dream"
            smooth={true}
            offset={-50}
            duration={1000}
          >
            DREAM BIG
          </Link>
        </div>
      </LinkContainer>
      <SocialContainer>
        <WalletConnect
          onClick={(e) => {
            console.log("clicked");
            e.preventDefault();
            dispatch(connect());
            getData();
          }}
        >
          Connect
        </WalletConnect>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/PixelPussNFT"
          style={{ color: "#fff" }}
        >
          <FiTwitter style={style} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/channels/895133506211029042/895141616879276142"
          style={{ color: "#fff" }}
        >
          <FaDiscord style={style} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://opensea.io/collection/the-pixel-pussy"
        >
          <img
            style={{ width: "30px", margin: "0 10px" }}
            src={openseaIcon}
            alt="opensea icon"
          />
        </a>
      </SocialContainer>
      <div className="menu-icon">
        <img onClick={toggleNav} className="menu-icon-img" src={Menu} alt="" />
      </div>
      <DropdownNav isOpen={isOpen} toggleNav={toggleNav} />
    </Nav>
  );
}

export default Navbar;
