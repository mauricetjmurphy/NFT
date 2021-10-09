import React from "react";
import styled from "styled-components";
import RoadMapItem from "./RoadMapItem";
import TitleSection from "./TitleSection";

import data from "./data/roadMapData";
import titleData from "./data/pageTitlesData";

export const RoadMapSection = styled.div`
  width: 100vw;
  height: 800px;
  background: #082032;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1390px) {
    padding: 0 100px;
  }

  @media only screen and (max-width: 450px) {
    padding: 0 20px;
  }
`;

function RoadMap() {
  return (
    <RoadMapSection id="roadmap">
      <TitleSection
        title={titleData[0].title}
        content={titleData[0].content}
        titleColor={"var(--gold)"}
        contentColor={"var(--gold)"}
      />

      <RoadMapItem
        percentage={data[0].percent}
        content={data[0].content}
        position={"left"}
      />
      <RoadMapItem
        percentage={data[1].percent}
        content={data[1].content}
        position={"right"}
      />
      <RoadMapItem
        percentage={data[2].percent}
        content={data[2].content}
        position={"left"}
      />
      <RoadMapItem
        percentage={data[3].percent}
        content={data[3].content}
        position={"right"}
      />
      <RoadMapItem
        percentage={data[4].percent}
        content={data[4].content}
        position={"left"}
      />
    </RoadMapSection>
  );
}

export default RoadMap;
