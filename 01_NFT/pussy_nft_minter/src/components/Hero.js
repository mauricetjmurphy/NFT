import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import images from "./data/imageData";
import character from "../assets/images/Character.png";
import "./hero.css";

export const Section = styled.div`
  min-width: 100vw;
  height: 500px;
  background: #082032;
  display: flex;
  padding: 0 150px;
`;

export const Container = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 250px;

  img {
    height: 100%;
    border-radius: 5px;
  }
`;

export const TimeUnit = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 3rem;

  p:first-child {
    padding-bottom: 10px;
  }

  p:nth-child(2) {
    font-size: 1.4rem;
  }
`;

function Hero() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countdownDate = new Date("May 30, 2022 00:00:00").getTime();

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

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section>
      <Container>
        <div>
          <section className="timer-container">
            <section
              style={{
                border: "3px solid #0e0e0e",
                padding: "20px",
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
      </Container>
      <Container>
        <ImageContainer>
          <img src={currentImage} alt="" />
        </ImageContainer>
      </Container>
    </Section>
  );
}

export default Hero;
