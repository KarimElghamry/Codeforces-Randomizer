import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
}

const StyleCancelButton = styled.div`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  background-color: white;
  color: red;
  margin-left: 5px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CancelButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <StyleCancelButton onClick={() => props.onClick()}>X</StyleCancelButton>
  );
};

export default CancelButton;
