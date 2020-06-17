import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {images} from '../../assets';

interface Props {
  loading: boolean;
}

const StyledButton = styled.div`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f7b708;
  color: white;
  font-weight: 600;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: #33ac71;
  }
`;

const LoopIcon = images.loopIcon;
const StyledLoopIcon = styled(LoopIcon)`
  height: 25px;
  width: 25px;
  fill: white;
`;

const RandomizeButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <StyledButton>
      <StyledLoopIcon></StyledLoopIcon>
      <div>Randomize</div>
    </StyledButton>
  );
};

RandomizeButton.defaultProps = {
  loading: false,
};

export default RandomizeButton;
