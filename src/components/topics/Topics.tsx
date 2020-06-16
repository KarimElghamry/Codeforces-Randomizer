import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import {getTags} from '../../services/data';

const Container = styled.div`
  width: 500px;
  border: lightgray solid 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: block;
`;

const tags: Array<string> = getTags();

const Topics: React.FC = (): ReactElement => {
  return (
    <Container>
      {tags.map((val: string) => (
        <Tag selected={false} content={val}></Tag>
      ))}
    </Container>
  );
};

export default Topics;
