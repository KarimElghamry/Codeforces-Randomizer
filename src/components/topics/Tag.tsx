import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  selected: boolean;
  content: string;
}

interface StyledProps {
  selected: boolean;
}

const StyledTag = styled.div<StyledProps>`
  background-color: ${(props) => (props.selected ? '#33AC71' : '#00bcd4')};
  border-radius: 2px;
  color: white;
  font-weight: 700;
  min-width: 70px;
  min-height: 30px;
  margin: 5px;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
`;

const Tag: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <StyledTag selected={props.selected}>
      <div style={{margin: '5px'}}>{props.content}</div>
    </StyledTag>
  );
};

export default Tag;
