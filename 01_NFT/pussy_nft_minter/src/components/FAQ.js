import React, { useState } from "react";
import data from "./data/faqsData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

export const FaqsSection = styled.div`
  width: 100%;
  background: #082032;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--gold);
    font-size: 34px;
    font-family: Alfa Slab One;
    letter-spacing: 2px;
    font-weight: 200;
    padding: 50px 0 30px 0;
  }

  p {
    font-family: poppins-reg;
    font-size: 16px;
    color: #fff;
  }

  .faq-intro {
    width: 30%;
    text-align: center;
  }

  @media only screen and (max-width: 450px) {
    .faq-intro {
      font-size: 14px;
      width: 80%;
    }
  }
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #082032;
`;

const Container = styled.div`
  padding: 30px 0;

  div:first-child {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

  div:last-child {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

const Wrap = styled.div`
  background: #3b3e40;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  text-align: center;
  cursor: pointer;
  width: 60vw;
  padding: 0 30px;

  h1 {
    padding: 2rem;
    font-family: poppins-reg;
    color: #fff;
  }

  p {
    padding: 30px 0;
    font-size: 22px;
    text-align: left;
  }

  @media only screen and (max-width: 450px) {
    width: 90vw;

    p {
      padding: 30px 0;
      font-size: 16px;
    }
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: var(--gold);
  width: 60vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--gold);
  border-top: 1px solid var(--gold);
  padding: 0 30px;

  p {
    font-size: 18px;
    color: var(--gold);
    padding: 0px;
    text-align: left;
  }

  @media only screen and (max-width: 450px) {
    width: 90vw;
    height: 160px !important;

    p {
      font-size: 14px;
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <FaqsSection>
      <h1>FAQs</h1>
      <p className="faq-intro">
        We've tried to provide as much information about the project and our
        plans as possible but if we've missed anything or you'd like to ask us
        something specific, just join our discord and @ one of the team!
      </p>
      <IconContext.Provider
        value={{ color: "var(--gold)", size: "25px", textAlign: "right" }}
      >
        <AccordionSection>
          <Container>
            {data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <p>{item.question}</p>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    </FaqsSection>
  );
};

export default Accordion;
