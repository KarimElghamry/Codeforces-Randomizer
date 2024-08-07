import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../../assets';
import Row from '../common/Row';
import axios from 'axios';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #24292e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  user-select: none;
  flex-direction: column;
`;

const GithubLogo = styled.img`
  width: 25px;
  margin: 10px;
`;

const ContributorList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Contributor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const githubProfileUrl = 'https://github.com/KarimElghamry';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const Footer: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/KarimElghamry/Codeforces-Randomizer/contributors');
        setContributors(response.data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <StyledFooter>
      <Row
        style={{ cursor: 'pointer', width: 'auto' }}
        onClick={() => window.open(githubProfileUrl, '_blank')}
      >
        <GithubLogo src={images.githubLogo} alt="GitHub Logo" />
        <div>KarimElghamry</div>
      </Row>
      <h2>Contributors</h2>
      <ContributorList>
        
        {contributors.map((contributor) => (
          <Contributor key={contributor.id}>
            <Avatar src={contributor.avatar_url} alt={`${contributor.login}'s avatar`} />
            <a href={contributor.html_url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              {contributor.login}
            </a>
          </Contributor>
        ))}
      </ContributorList>
    </StyledFooter>
  );
};

export default Footer;
