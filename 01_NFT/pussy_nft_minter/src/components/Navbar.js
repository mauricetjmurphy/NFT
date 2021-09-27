import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import styled from "styled-components";
import image from "../assets/images/Icon.png";

export const Nav = styled.div`
    min-width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    font-family: montserrat;
    background: #242633;
    color: white;
`;

export const BrandContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
`;

const style = {
    width: "30px",
    height: "30px",
    margin: "0 10px",
};

function navbar() {
    return (
        <Nav>
            <BrandContainer>
                <p
                    style={{
                        fontFamily: "Alfa Slab One",
                        fontSize: "2rem",
                    }}
                >
                    <strong>Pixel Pussy</strong>
                </p>
            </BrandContainer>
            <SocialContainer>
                <a href="/" style={{ color: "#fff" }}>
                    <FiTwitter style={style} />
                </a>
                <a href="/" style={{ color: "#fff" }}>
                    <FiInstagram style={style} />
                </a>
            </SocialContainer>
        </Nav>
    );
}

export default navbar;
