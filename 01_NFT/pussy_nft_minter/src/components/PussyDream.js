import React from "react";
import styled from "styled-components";

export const DreamSection = styled.div`
  min-width: 100vw;
  height: 600px;
  background: #082032;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Alfa Slab One";
    font-size: 34px;
    padding: 50px;
    font-weight: 200;
    letter-spacing: 2px;
    color: var(--gold);
    text-align: center;

    @media only screen and (max-width: 450px) {
      padding: 0 0 30px 0;
      margin: 0;
    }
  }

  p {
    font-family: "poppins-reg";
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1px;
    text-align: center;
    color: var(--gold);
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 1390px) {
    padding: 0 100px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 450px) {
    height: 800px;
    padding: 0;
    margin: 0;

    p {
      padding-bottom: 20px;
    }

    p:nth-child(4) {
      padding: 0;
    }
  }
`;

function PussyDream() {
  return (
    <DreamSection id="dream">
      <div style={{ width: "75%" }}>
        <h1>THE PIXEL PUSSY DREAM…</h1>
        <p>
          We believe that blockchain is the future and we want to help spread
          the love through more accessible mechanisms and features that are
          managed through fair and open platforms. To us, openness involves
          strengthening community awareness through social gaming and fairness
          means empowering game users in the governance and of their game and
          its democratised finance.
        </p>
        <p>
          In this effort, we will return 20% of royalties to the Kitty Bank with
          an additional 10% of royalties going to pussy owners. No owner
          hierarchy will be allowed. Voting rights will be decided through
          CatFood distribution based on in-game activity.
        </p>
        <p>
          Several additional development options are under consideration and
          these will be posted for community election during pre-launch stage.
        </p>
      </div>
    </DreamSection>
  );
}

export default PussyDream;
