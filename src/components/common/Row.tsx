import React, {ReactElement} from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row: React.FC<{}> = (): ReactElement => {
  return <StyledRow></StyledRow>;
};

export default Row;
