import React from "react";
import styled from "styled-components";
import RoadMapItem from "./RoadMapItem";
import TitleSection from "./TitleSection";

import data from "./data/roadMapData";
import titleData from "./data/pageTitlesData";

export const RoadMapSection = styled.div`
  min-width: 100vw;
  height: 900px;
  background: #082032;
  padding: 0 150px;
`;

function RoadMap() {
  return (
    <RoadMapSection>
      <TitleSection
        title={titleData[0].title}
        content={titleData[0].content}
        color={"#cba561"}
      />

      <RoadMapItem percentage={data[0].percent} content={data[0].content} />
      <RoadMapItem percentage={data[1].percent} content={data[1].content} />
      <RoadMapItem percentage={data[2].percent} content={data[2].content} />
      <RoadMapItem percentage={data[3].percent} content={data[3].content} />
      <RoadMapItem
        percentage={data[4].percent}
        content={data[4].content}
        last={"True"}
      />
    </RoadMapSection>
  );
}

export default RoadMap;
