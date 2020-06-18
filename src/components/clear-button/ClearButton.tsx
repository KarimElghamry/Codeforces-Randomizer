import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
}

const StyledButton = styled.div`
  width: 120px;
  height: 35px;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: red;
  border: red solid 2px;
  color: white;
  font-weight: 600;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: white;
    color: red;
  }
`;

const ClearButton: React.FC<Props> = (props: Props): ReactElement => {
  return <StyledButton onClick={() => props.onClick()}>Clear</StyledButton>;
};

export default ClearButton;
