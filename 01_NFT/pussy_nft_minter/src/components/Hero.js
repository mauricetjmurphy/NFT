import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import styled from "styled-components";
import "../styles/styles.css";
import CountdownTimer from "./CountdownTimer";

// const truncate = (input, len) =>
//   input.length > len ? `${input.substring(0, len)}...` : input;

export const HeroSection = styled.div`
  min-width: 100vw;
  height: 900px;
  background: #082032;
  display: flex;
  justify-content: center;
  padding: 0 150px;
  padding-top: 150px;

  span {
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 450px) {
    padding: 100px 20px 0 20px;
    height: 750px;

    span {
      padding-bottom: 30px;
    }
  }
`;

export const HeroContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    font-family: "Alfa Slab One";
    color: var(--gold);
    letter-spacing: 6px;
    font-weight: 200;
    padding: 40px 0;

    @media only screen and (max-width: 1390px) {
      font-size: 36px;
    }

    @media only screen and (max-width: 450px) {
      font-size: 46px;
      padding: 25px 0;
      margin: 0;
      letter-spacing: 4px;
      text-align: center;
    }
  }

  h2 {
    font-size: 22px;
    font-family: "poppins-reg";
    color: #fff;

    letter-spacing: 2px;

    @media only screen and (max-width: 1390px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 450px) {
      font-size: 20px;
      padding: 0;
      margin: 0;
    }
  }

  p {
    font-size: 20px;
    font-family: "poppins-reg";
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
    letter-spacing: 1.5px;
    line-height: 26px;

    @media only screen and (max-width: 1390px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 450px) {
      font-size: 12px;
      line-height: 16px;
      padding: 0;
      margin: 0;
    }
  }

  @media only screen and (max-width: 1390px) {
    width: 80%;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const MintButton = styled.button`
  min-height: 40px;
  width: 200px;
  border: 2px solid #fff;
  background: var(--gold);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: "poppins-reg";
  font-weight: 900;
  color: #082032;
  margin: 20px 0;

  &:hover {
    border: 2px solid var(--gold);
    background: #fff;
    color: var(--gold);
  }

  @media only screen and (max-width: 450px) {
    margin: 35px 0;
  }
`;

export const TextDescription = styled.p`
  color: var(--white);
  font-size: 12px;
  line-height: 1.6;

  @media only screen and (max-width: 450px) {
    font-size: 10px !important;
`;

export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

function Hero() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  // const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  // const [blockchainAccount, setBlockchainAccount] = "";

  console.log(blockchain);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Pixel Pussy...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "0x0f65a53f5Fb9EDFc04056Ee1740F51C87c8C89Bb",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((150 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "You now own a Pixel Pussy NFT. You can go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
        // setBlockchainAccount(blockchain.account);
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      // setBlockchainAccount(blockchain.account);
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <HeroSection>
      <HeroContentContainer>
        <h2>Welcome to</h2>
        <h1>PIXEL PUSSIES</h1>
        <p>
          Pixel pussies Gen-0 are a collection of 2000 unique art pieces which
          will become the first generation of breedable, tradable, and
          customizable NFT cats. Join us in making the first 100% community
          owned NFT gaming platform.
        </p>
        <p>1 Pixel Pussy = 150 Matic</p>
        {blockchain.account !== null ? (
          <MintButton
            disabled={1}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs(1);
              getData();
            }}
          >
            {claimingNft ? "BUSY" : "Mint a Pussy"}
          </MintButton>
        ) : (
          <MintButton
            disabled={true}
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}
          >
            Connect
          </MintButton>
        )}

        <TextDescription style={{ textAlign: "center" }}>
          {feedback}
        </TextDescription>

        <p>We will be releasing the pussies into the wild in:</p>

        <div>
          <CountdownTimer />
        </div>

        <SpacerSmall />
        <TextDescription style={{ textAlign: "center", fontSize: "12px" }}>
          Please make sure you are connected to the right network (Polygon
          Mainnet) and the correct address. Please note: Once you make the
          purchase, you cannot undo this action.
        </TextDescription>
        <SpacerSmall />
      </HeroContentContainer>
    </HeroSection>
  );
}

export default Hero;
