import React, {ReactElement} from 'react';
import styled, {keyframes} from 'styled-components';
import {Problem} from '../../models/Problem';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import {images} from '../../assets';

interface CardProps {
  problem: Problem;
  problemStatistics: ProblemStatistics;
}

interface CellProps {
  flex: number;
}

const EnterAnim = keyframes`
from{
  margin-left: -50%;
}
to{
  margin-left: 20px: 
}
`;

const StyledProblemCard = styled.div`
  max-width: 400px;
  min-width: 400px;
  min-height: 80px;
  background-color: #f8f8f8;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: 0.3s;
  animation: ${EnterAnim} 0.5s cubic-bezier(0.2, 0, 0, 1.2);

  &:hover {
    background-color: lightgray;
  }
`;

const Cell = styled.div<CellProps>`
  flex: ${(props) => props.flex};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProblemCard: React.FC<CardProps> = (props: CardProps): ReactElement => {
  const problem: Problem = props.problem;
  const problemStats: ProblemStatistics = props.problemStatistics;
  const baseUrl: string = 'https://codeforces.com/problemset/problem';

  const handleUrlRedirect = () => {
    const redirectUrl: string = `${baseUrl}/${problem.contestId}/${problem.index}`;
    window.open(redirectUrl, '_blank');
  };

  return (
    <StyledProblemCard
      onClick={() => {
        handleUrlRedirect();
      }}
    >
      <Cell flex={1}>{`${problemStats.contestId}${problemStats.index}`}</Cell>
      <Cell flex={2}>{`${problem.name}`}</Cell>
      <Cell flex={1}>{`${problem.rating}`}</Cell>
      <Cell flex={1}>
        <img src={images.userIcon} alt=""></img>
        <span>{`x${problemStats.solvedCount}`}</span>
      </Cell>
    </StyledProblemCard>
  );
};

export default ProblemCard;
