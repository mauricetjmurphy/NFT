import React from "react";
import styled from "styled-components";

export const DreamSection = styled.div`
  min-width: 100vw;
  height: 500px;
  background: #082032;
  padding: 0 150px;
`;

function PussyDream() {
  return (
    <DreamSection>
      <h1>THE PIXEL PUSSY DREAM…</h1>
      <p>
        We believe that blockchain is the future and we want to help spread the
        love through more accessible mechanisms and features that are managed
        through fair and open platforms. To us, openness involves strengthening
        community awareness through social gaming and fairness means empowering
        game users in the governance and of their game and its democratised
        finance.
      </p>
      <p>
        In this effort, we will return 20% of royalties to the Kitty Bank with
        an additional 10% of royalties going to pussy owners. No owner hierarchy
        will be allowed. Voting rights will be decided through CatFood
        distribution based on in-game activity.
      </p>
      <p>
        Several additional development options are under consideration and these
        will be posted for community election during pre-launch stage.
      </p>
    </DreamSection>
  );
}

export default PussyDream;
