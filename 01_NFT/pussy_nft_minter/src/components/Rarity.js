import React from "react";
import styled from "styled-components";
import TitleSection from "./TitleSection";

import titleData from "./data/pageTitlesData";

export const RaritySection = styled.div`
  min-width: 100vw;
  height: 800px;
  background: #334756;
  padding: 0 150px;
`;

function Rarity() {
  return (
    <RaritySection>
      <TitleSection title={titleData[1].title} content={titleData[1].content} />
      <div>
        <div>
          <p>
            Each Pixel Pussy is generated from a total of 27 Gen-0 attribute.
            Produced with a verifiable random function and coded with Blockchain
            ERC721 technology, every cat is 100% unique and stored with proof of
            ownership. With the launch of our smart contract, Pixel Pussies may
            be bought, sold or transferred on the Ethereum network.
          </p>
          <p>
            Gen-0 cats hold 6 traits that they can pass onto offspring through
            breeding. This might sound a lot like cryptokitties, but Pixel
            Pussies go one big step further. If they wish, users can define
            their own list of preferred traits, which they split with co-parents
            (50:50), once as adopting dame and once as sire.
          </p>
          <p>
            Three breeding cycles will occur and each time two traits will be
            added to offspring characteristics, giving Gen-3 a total of 12
            visible traits. There will be no rules to trait selection, leaving
            genetic evolution up to game users.
          </p>
        </div>
        <div></div>
      </div>
    </RaritySection>
  );
}

export default Rarity;
