import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import images from "./imageData";

export const Section = styled.div`
    min-width: 100vw;
    height: 350px;
    background: #242633;
    display: flex;
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

function Hero() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date("May 30, 2020 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            console.log(distance);

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );

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
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <Section>
            <Container>
                <div>
                    <div>Time to Buy</div>
                    <section>
                        <p>{timerDays}</p>
                        <p>
                            <small>Days</small>
                        </p>
                    </section>
                    <section>
                        <p>{timerHours}</p>
                        <p>
                            <small>Hours</small>
                        </p>
                    </section>
                    <section>
                        <p>{timerMinutes}</p>
                        <p>
                            <small>Minutes</small>
                        </p>
                    </section>
                    <section>
                        <p>{timerSeconds}</p>
                        <p>
                            <small>Seconds</small>
                        </p>
                    </section>
                </div>
            </Container>
            <Container>
                <ImageContainer>
                    <img src="" alt="" />
                </ImageContainer>
            </Container>
        </Section>
    );
}

export default Hero;
