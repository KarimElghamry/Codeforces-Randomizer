import axios, {AxiosRequestConfig} from 'axios';
import {Problem} from '../models/Problem';
import {ProblemStatistics} from '../models/ProblemStatistics';

const baseUrl: string = 'https://codeforces.com/api/problemset.problems';

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export async function getRandomProblem(
  topics: Array<string>,
  ratings: {min: number; max: number}
): Promise<{problem: Problem; problemStatistics: ProblemStatistics}> {
  if (topics.length === 0) throw new Error('No topics selected');

  const tags: string = topics.reduce(
    (prev: string, current: string, index: number) => {
      return prev + ';' + current;
    }
  );

  let response: AxiosRequestConfig;

  try {
    response = await axios.get(baseUrl, {
      params: {
        tags: tags,
      },
    });
  } catch (e) {
    throw new Error('Server error');
  }

  if (response.data.status !== 'OK') throw new Error('Invalid combination');

  const problems: Array<Problem> = response.data.result.problems as Array<
    Problem
  >;
  const problemsStatistics: Array<ProblemStatistics> = response.data.result
    .problemStatistics as Array<ProblemStatistics>;

  let filteredProblems: Array<number> = [];
  problems.forEach((val: Problem, index: number) => {
    if (!val.rating) val.rating = ratings.min;

    if (val.rating >= ratings.min && val.rating <= ratings.max)
      filteredProblems = filteredProblems.concat(index);
  });

  if (filteredProblems.length === 0)
    throw new Error('No problems found. Try another combination');

  const probIndex: number =
    filteredProblems[getRandomInt(filteredProblems.length)];
  return {
    problem: problems[probIndex],
    problemStatistics: problemsStatistics[probIndex],
  };
}
