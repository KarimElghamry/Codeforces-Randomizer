import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
}

const StyleCancelButton = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancelButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <StyleCancelButton onClick={() => props.onClick()}></StyleCancelButton>
  );
};

export default CancelButton;
