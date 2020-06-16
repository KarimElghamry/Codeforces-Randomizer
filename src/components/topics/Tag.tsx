import React, {ReactElement} from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  background-color: #ebebeb;
  border-radius: 5px;
  color: #808080;
  min-width: 50px;
`;

const Tag: React.FC = (): ReactElement => {
  return <StyledTag>KARIM</StyledTag>;
};

export default Tag;
