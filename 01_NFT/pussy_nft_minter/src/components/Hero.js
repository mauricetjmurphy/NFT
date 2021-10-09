import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import images from "./data/imageData";
import "../styles/styles.css";

export const HeroSection = styled.div`
  min-width: 100vw;
  height: 700px;
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
      font-size: 28px;
      padding: 25px 0;
      margin: 0;
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
      padding: 0 0 10px 0;
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

export const TimeUnit = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 3rem;

  p {
    font-family: "poppins-reg";
    color: var(--gold);
    font-size: 42px;
  }

  small {
    font-size: 16px;
  }

  p:first-child {
    padding-bottom: 10px;
  }

  p:nth-child(2) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 10px;
    margin: 0;
  }
`;

export const MintButton = styled.div`
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

function Hero() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countdownDate = new Date("November 01, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //Stop the timer
        clearInterval(interval.current);
      } else {
        // Update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

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
        <MintButton>Mint a Pussy</MintButton>
        <p>We will be releasing the pussies into the wild in:</p>

        <div>
          <section className="timer-container">
            <section
              style={{
                borderRadius: "5px",
              }}
              className="timer"
            >
              <div className="clock">
                <TimeUnit>
                  <p>{timerDays}</p>
                  <p>
                    <small>Days</small>
                  </p>
                </TimeUnit>
                <span>:</span>
                <TimeUnit>
                  <p>{timerHours}</p>
                  <p>
                    <small>Hours</small>
                  </p>
                </TimeUnit>
                <span>:</span>
                <TimeUnit>
                  <p>{timerMinutes}</p>
                  <p>
                    <small>Minutes</small>
                  </p>
                </TimeUnit>
                <span>:</span>
                <TimeUnit>
                  <p>{timerSeconds}</p>
                  <p>
                    <small>Seconds</small>
                  </p>
                </TimeUnit>
              </div>
            </section>
          </section>
        </div>
      </HeroContentContainer>
    </HeroSection>
  );
}

export default Hero;
