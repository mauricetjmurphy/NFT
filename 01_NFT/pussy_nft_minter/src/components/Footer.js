import React from "react";
import styled from "styled-components";

export const FooterSection = styled.div`
  min-width: 100vw;
  height: 250px;
  background: #082032;
  padding: 0 150px;
`;

function Footer() {
  return (
    <FooterSection>
      <p>
        All explorations for development need time to be realized. The plans on
        the roadmap may also be adjusted with the actual situation (of course,
        we will give full consideration to the views of the community). Pixel
        Pussies are a long-term project. And like any other project, there are
        numerous risks that may lead to failure. Therefore, if you don’t trust
        us, please don’t buy. Even if you have confidence in our project，
        please spend money within your tolerance.
      </p>
    </FooterSection>
  );
}

export default Footer;
