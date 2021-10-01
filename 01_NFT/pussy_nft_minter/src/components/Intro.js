import React from "react";

function Intro() {
  return (
    <div
      style={{
        height: "300px",
        background: "#334756",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          width: "70%",
          textAlign: "center",
          fontFamily: "poppins-reg",
          fontSize: "1.1rem",
          fontWeight: "200",
          color: "#0e0e0e",
          letterSpacing: "1px",
          lineHeight: "1.6rem",
        }}
      >
        Introducing Pixel Pussies, a new ‘Blockchain’ game where users can
        collect and breed pixel pussies in a universe made by digital cats and
        governed by digital cats. Each cat will be randomly generated and stored
        as ERC721 TOKENS on IPFS. These super rare cats will be the first
        generation (Gen-0) of pixel pussies who will get to vote on key early
        game development and design. Using CatFood ERC20 tokens, users will also
        get to vote on investment decisions in the community Kitty Bank.
      </p>
    </div>
  );
}

export default Intro;
