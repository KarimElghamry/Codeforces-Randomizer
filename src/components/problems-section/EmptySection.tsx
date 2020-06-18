import React, {ReactElement} from 'react';
import styled from 'styled-components';

const StyledEmptySecion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EmptySection: React.FC<{}> = (): ReactElement => {
  return (
    <StyledEmptySecion>
      <div>Choose topics and press Randomize to start adding problems</div>
    </StyledEmptySecion>
  );
};

export default EmptySection;
