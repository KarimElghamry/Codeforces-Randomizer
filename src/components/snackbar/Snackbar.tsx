import React, {ReactElement, useEffect} from 'react';
import styled from 'styled-components';
import CancelButton from './CancelButton';

interface SnackbarProps {
  visible: boolean;
  type?: string;
  content: string;
  onCancel: Function;
  timeout: number;
}

const StyledSnackbar = styled.div<SnackbarProps>`
  background-color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  color: white;
  opacity: ${(props) => (props.visible ? '0.9' : '0')};
  visibility: ${(props) => (props.visible ? 'none' : 'hidden')};
  position: absolute;
  bottom: ${(props) => (props.visible ? '2.5vh' : '0')};
  left: 0;
  right: 0;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 350px;
  height: 55px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  user-select: none;
  transition-duration: 0.5s;
`;

const Snackbar: React.FC<SnackbarProps> = (
  props: SnackbarProps
): ReactElement => {
  const onCancel: Function = props.onCancel;
  const visible: boolean = props.visible;
  const timeout: number = props.timeout;

  useEffect(() => {
    if (visible) {
      const makeInvisible = setTimeout(() => onCancel(), timeout);
      return () => clearTimeout(makeInvisible);
    }
  }, [visible, onCancel, timeout]);

  return (
    <StyledSnackbar {...props}>
      <div
        style={{
          maxLines: 1,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'block',
          flex: '5',
        }}
      >
        {props.content}
      </div>
      <CancelButton onClick={onCancel}></CancelButton>
    </StyledSnackbar>
  );
};

Snackbar.defaultProps = {
  type: 'error',
};

export default Snackbar;
