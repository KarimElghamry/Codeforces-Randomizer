import React, {ReactElement} from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: red;
  color: white;
  font-weight: 600;
  border-radius: 6px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;
`;

const ClearButton: React.FC = (): ReactElement => {
  return <StyledButton>Clear</StyledButton>;
};

export default ClearButton;
