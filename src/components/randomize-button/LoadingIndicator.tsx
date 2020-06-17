import React, {ReactElement} from 'react';
import styled, {keyframes} from 'styled-components';

interface CircleProps {
  color: string;
}

const BounceAnim = keyframes`
from{
    bottom: 5px;
}
to{
    bottom: 15px;
}
`;

const Circle = styled.div<CircleProps>`
  position: absolute;
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin: 2px;
  bottom: 5px;
  background-color: ${(props) => props.color};
  animation: ${BounceAnim} 0.5s cubic-bezier(0.3, 0, 0, 1) infinite;
  animation-direction: alternate;

  &:nth-child(1) {
    left: 30%;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    left: 60%;
    animation-delay: 0.4s;
  }
`;

const StyledLoadingIndicator = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const LoadingIndicator: React.FC = (): ReactElement => {
  return (
    <StyledLoadingIndicator>
      <Circle color="#F9CD55"></Circle>
      <Circle color="#198FCE"></Circle>
      <Circle color="#B91D25"></Circle>
    </StyledLoadingIndicator>
  );
};

export default LoadingIndicator;
