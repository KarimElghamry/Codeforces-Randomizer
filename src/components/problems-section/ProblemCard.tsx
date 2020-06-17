import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {Problem} from '../../models/Problem';
import {ProblemStatistics} from '../../models/ProblemStatistics';

interface CardProps {
  problem: Problem;
  problemStatistics: ProblemStatistics;
}

interface CellProps {
  flex: number;
}

const StyledProblemCard = styled.div`
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

  return (
    <StyledProblemCard>
      <Cell flex={1}>{`${problemStats.contestId}${problemStats.index}`}</Cell>
      <Cell flex={3}>{`${problem.name}`}</Cell>
      <Cell flex={1}>{`${problem.rating}`}</Cell>
      <Cell flex={1}>{`x${problemStats.solvedCount}`}</Cell>
    </StyledProblemCard>
  );
};

export default ProblemCard;
