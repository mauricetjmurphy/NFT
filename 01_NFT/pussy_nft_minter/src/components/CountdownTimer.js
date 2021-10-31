import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const TimeUnit = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 3rem;

  small {
    font-size: 16px;
  }

  p:first-child {
    padding-bottom: 10px;
    font-family: "poppins-reg";
    color: var(--gold);
    font-size: 42px;
  }

  p:nth-child(2) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 10px;
    margin: 0;

    p:first-child {
      font-size: 38px;
    }

    small {
      font-size: 12px;
    }
  }
`;

function CountdownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countdownDate = new Date("November 14, 2021 00:00:00").getTime();

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
  );
}

export default CountdownTimer;
