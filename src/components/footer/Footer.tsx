import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {images} from '../../assets';
import Row from '../common/Row';

const StyledFooter = styled.div`
  width: 100%;
  background-color: #24292e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  user-select: none;
`;

const GithubLogo = styled.img`
  width: 25px;
  margin: 10px;
`;

const githubProfileUrl: string = 'https://github.com/KarimElghamry';

const Footer: React.FC = (): ReactElement => {
  return (
    <StyledFooter>
      <Row
        style={{cursor: 'pointer', width: 'auto'}}
        onClick={() => window.open(githubProfileUrl, '_blank')}
      >
        <GithubLogo src={images.githubLogo}></GithubLogo>
        <div>KarimElghamry</div>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
