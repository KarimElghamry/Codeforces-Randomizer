import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface SnackbarProps {
  visible: boolean;
  type?: string;
  content: string;
}

const StyledSnackbar = styled.div<SnackbarProps>`
  background-color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  color: white;
  opacity: 0.8;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 55px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Snackbar: React.FC<SnackbarProps> = (
  props: SnackbarProps
): ReactElement => {
  return <StyledSnackbar {...props}>{props.content}</StyledSnackbar>;
};

Snackbar.defaultProps = {
  type: 'error',
};

export default Snackbar;
