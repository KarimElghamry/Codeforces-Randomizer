import axios from 'axios';
import {Problem} from '../models/Problem';
import {ProblemStatistics} from '../models/ProblemStatistics';

const baseUrl: string = 'https://codeforces.com/api/problemset.problems';

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export async function getRandomProblem(
  topics: Array<string>
): Promise<{problem: Problem; problemStatistics: ProblemStatistics}> {
  const tags: string = topics.reduce(
    (prev: string, current: string, index: number) => {
      return prev + ';' + current;
    }
  );

  console.log(tags);

  const response = await axios.get(baseUrl, {
    params: {
      tags: tags,
    },
  });

  const problems: Array<Problem> = response.data.result.problems as Array<
    Problem
  >;
  const problemsStatistics: Array<ProblemStatistics> = response.data.result
    .problemStatistics as Array<ProblemStatistics>;

  const probIndex: number = getRandomInt(problems.length);
  return {
    problem: problems[probIndex],
    problemStatistics: problemsStatistics[probIndex],
  };
}
