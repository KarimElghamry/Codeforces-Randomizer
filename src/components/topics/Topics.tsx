import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const Container = styled.div`
  width: 500px;
  height: 150px;
  border: grey solid 1px;
  border-radius: 10px;
  margin: 10px;
  display: block;
`;

const Topics: React.FC = (): ReactElement => {
  return (
    <Container>
      <Tag selected={false}></Tag>
      <Tag selected={true}></Tag>
      <Tag selected={true}></Tag>
      <Tag selected={true}></Tag>
      <Tag selected={false}></Tag>
      <Tag selected={false}></Tag>
    </Container>
  );
};

export default Topics;
