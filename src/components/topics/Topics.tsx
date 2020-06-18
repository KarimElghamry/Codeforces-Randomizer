import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import {getTags} from '../../services/data';

interface Props {
  selectedTopics: Array<string>;
  setSelectedTopics: Function;
  triggerError: (content: string) => void;
}

const Container = styled.div`
  max-width: 650px;
  min-width: 100px;
  border: lightgray solid 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: block;
`;

const tags: Array<string> = getTags();

const Topics: React.FC<Props> = (props: Props): ReactElement => {
  const selectedTopics: Array<string> = props.selectedTopics;
  const handleTopicAddition = (selected: boolean, topic: string) => {
    let newSelectedTopics: Array<string>;
    if (selected) {
      newSelectedTopics = selectedTopics.filter((val: string) => val !== topic);
    } else {
      if (selectedTopics.length >= 4) {
        props.triggerError('Maximum of 4 selected topics');
        return;
      }
      newSelectedTopics = selectedTopics.concat(topic);
    }

    props.setSelectedTopics(newSelectedTopics);
  };

  return (
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
  );
};

export default Topics;
