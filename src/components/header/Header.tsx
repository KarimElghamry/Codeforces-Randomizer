import React, {ReactElement} from 'react';
import styled from 'styled-components';
import * as assets from '../../assets';

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Header: React.FC = (): ReactElement => {
  return (
    <div>
      <img width={300} src={assets.images.codeforcesLogo} alt=""></img>
      <CenteredDiv>Randomizer</CenteredDiv>
    </div>
  );
};

export default Header;
