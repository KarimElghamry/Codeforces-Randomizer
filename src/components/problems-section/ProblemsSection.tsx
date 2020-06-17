import React, {ReactElement} from 'react';
import ProblemCard from './ProblemCard';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import {Problem} from '../../models/Problem';
import styled from 'styled-components';

const StyleProblemsSection = styled.div`
  margin-top: 20px;
  max-height: 300px;
  overflow-y: scroll;
  scrollbar-color: lightgray white;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 5px;
  }
`;

const ProblemsSection: React.FC = (): ReactElement => {
  const problem: Problem = {
    contestId: 1367,
    index: 'D',
    name: 'Task on the Board',
    type: 'PROGRAMMING',
    rating: 1000,
  } as Problem;

  const problemStats: ProblemStatistics = {
    contestId: 1367,
    index: 'D',
    solvedCount: 3139,
  } as ProblemStatistics;

  return (
    <StyleProblemsSection>
      <ProblemCard
        problem={problem}
        problemStatistics={problemStats}
      ></ProblemCard>
      <ProblemCard
        problem={problem}
        problemStatistics={problemStats}
      ></ProblemCard>
      <ProblemCard
        problem={problem}
        problemStatistics={problemStats}
      ></ProblemCard>
      <ProblemCard
        problem={problem}
        problemStatistics={problemStats}
      ></ProblemCard>
    </StyleProblemsSection>
  );
};

export default ProblemsSection;
