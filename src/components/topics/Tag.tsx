import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  selected: boolean;
}

const StyledTag = styled.div<Props>`
  background-color: ${(props) => (props.selected ? '#33AC71' : '#00bcd4')};
  border-radius: 2px;
  color: white;
  min-width: 80px;
  min-height: 30px;
  margin: 5px;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Tag: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <StyledTag selected={props.selected}>
      <div style={{margin: '5px'}}>binahjghjgry eotio</div>
    </StyledTag>
  );
};

export default Tag;
