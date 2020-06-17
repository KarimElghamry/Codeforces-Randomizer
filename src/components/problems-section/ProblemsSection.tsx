import React, {ReactElement} from 'react';
import ProblemCard from './ProblemCard';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import {Problem} from '../../models/Problem';

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
    <div>
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
    </div>
  );
};

export default ProblemsSection;
