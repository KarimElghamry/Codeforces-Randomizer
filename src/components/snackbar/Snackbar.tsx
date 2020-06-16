import React, {ReactElement} from 'react';
import styled from 'styled-components';
import CancelButton from './CancelButton';

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
  padding-left: 15px;
  padding-right: 15px;
  width: 300px;
  height: 55px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
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
      <CancelButton onClick={() => console.log('clicked')}></CancelButton>
    </StyledSnackbar>
  );
};

Snackbar.defaultProps = {
  type: 'error',
};

export default Snackbar;
