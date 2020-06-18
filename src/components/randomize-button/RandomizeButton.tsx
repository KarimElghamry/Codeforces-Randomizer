import React, {ReactElement} from 'react';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';
import {images} from '../../assets';

interface Props {
  isLoading: boolean;
  onClick: Function;
}

const StyledButton = styled.div<Props>`
  padding: 2px;
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => (props.isLoading ? 'white' : '#f7b708')};
  color: white;
  font-weight: 600;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${(props) => (props.isLoading ? 'white' : '#33ac71')};
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
    <StyledButton
      isLoading={props.isLoading}
      onClick={() => {
        if (props.isLoading) return;
        props.onClick();
      }}
    >
      {props.isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <React.Fragment>
          <StyledLoopIcon></StyledLoopIcon>
          <div>Randomize</div>
        </React.Fragment>
      )}
    </StyledButton>
  );
};

RandomizeButton.defaultProps = {
  isLoading: false,
};

export default RandomizeButton;
