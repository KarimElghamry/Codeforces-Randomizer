import React, {ReactElement} from 'react';
import styled from 'styled-components';
import CancelButton from './CancelButton';

interface SnackbarProps {
  visible: boolean;
  type?: string;
  content: string;
  onCancel: Function;
}

const StyledSnackbar = styled.div<SnackbarProps>`
  background-color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  color: white;
  opacity: ${(props) => (props.visible ? '0.8' : '0')};
  visibility: ${(props) => (props.visible ? 'none' : 'hidden')};
  position: absolute;
  bottom: ${(props) => (props.visible ? '20px' : '-100px')};
  left: 0;
  right: 0;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 300px;
  height: 55px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition-duration: 0.5s;
`;

const Snackbar: React.FC<SnackbarProps> = (
  props: SnackbarProps
): ReactElement => {
  return (
    <StyledSnackbar {...props}>
      <div
        style={{
          maxLines: 1,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'block',
        }}
      >
        {props.content}
      </div>
      <CancelButton onClick={props.onCancel}></CancelButton>
    </StyledSnackbar>
  );
};

Snackbar.defaultProps = {
  type: 'error',
};

export default Snackbar;
