import React, {ReactElement} from 'react';
import styled from 'styled-components';

const StyledEmptySecion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EmptySection: React.FC<{}> = (): ReactElement => {
  return (
    <StyledEmptySecion>
      <div>Choose topics and press Randomize</div>
      <div>to start adding problems.</div>
      <div>Type your handle to filter solved problems</div>
    </StyledEmptySecion>
  );
};

export default EmptySection;
