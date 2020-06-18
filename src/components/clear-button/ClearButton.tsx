import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Row from '../common/Row';

interface Props {
  onClick: Function;
  disabled: boolean;
}

const StyledButton = styled.div<Props>`
  width: 120px;
  height: 35px;
  margin: 15px;
  display: flex;
  visibility: ${(props) => (props.disabled ? 'hidden' : 'none')};
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
  transition-property: background-color, color;

  &:hover {
    background-color: white;
    color: red;
  }
`;

const ClearButton: React.FC<Props> = (props: Props): ReactElement => {
  console.log(props.disabled);
  return (
    <Row>
      <StyledButton {...props} onClick={() => props.onClick()}>
        Clear
      </StyledButton>
    </Row>
  );
};

export default ClearButton;
