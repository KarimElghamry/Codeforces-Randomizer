import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface SnackbarProps {
  visible: boolean;
  type?: string;
  content: string;
}

const Wrapper: React.FC<SnackbarProps> = (
  props: SnackbarProps
): ReactElement => {
  return <div>{props.content}</div>;
};

Wrapper.defaultProps = {
  type: 'error',
};

const Snackbar = styled(Wrapper)`
  background-color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  opacity: 0.7;
  position: absolute;
  bottom: 20px;
  min-width: 100px;
  min-height: 55px;
  border-radius: 20px;
`;

export default Snackbar;
