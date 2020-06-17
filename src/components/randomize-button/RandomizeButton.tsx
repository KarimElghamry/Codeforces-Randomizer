import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {images} from '../../assets';

const StyledButton = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const LoopIcon = images.loopIcon;
const StyledLoopIcon = styled(LoopIcon)`
  height: 25px;
  width: 25px;
  fill: white;
`;

const RandomizeButton: React.FC = (): ReactElement => {
  return (
    <StyledButton>
      <StyledLoopIcon></StyledLoopIcon>
      <div></div>
    </StyledButton>
  );
};

export default RandomizeButton;
