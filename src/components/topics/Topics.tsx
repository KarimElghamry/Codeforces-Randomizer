import React, {ReactElement} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  height: 150px;
  border: grey solid 2px;
  border-radius: 10px;
  margin: 10px;
`;

const Topics: React.FC = (): ReactElement => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Topics;
