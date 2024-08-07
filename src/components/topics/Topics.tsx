import React, { ReactElement } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { getTags } from "../../services/data";
import Row from "../common/Row";

interface Props {
  selectedTopics: Array<string>;
  setSelectedTopics: Function;
}

const Container = styled.div`
  max-width: 1250px;
  min-width: 100px;
  border: lightgray solid 1px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 5px;
  padding: 10px;
  display: block;
`;

const tags: Array<string> = getTags();

const Topics: React.FC<Props> = ({
  selectedTopics,
  setSelectedTopics,
}: Props): ReactElement => {
  const handleTopicAddition = (selected: boolean, topic: string) => {
    let newSelectedTopics: Array<string>;
    if (selected) {
      newSelectedTopics = selectedTopics.filter((val: string) => val !== topic);
    } else {
      newSelectedTopics = selectedTopics.concat(topic);
    }

    setSelectedTopics(newSelectedTopics);
  };

  return (
    <Row>
      <Container>
        {tags.map((val: string) => {
          const selected: boolean = selectedTopics.includes(val);
          return (
            <Tag
              key={val}
              selected={selected}
              content={val}
              onClick={handleTopicAddition}
            ></Tag>
          );
        })}
      </Container>
    </Row>
  );
};

export default Topics;
