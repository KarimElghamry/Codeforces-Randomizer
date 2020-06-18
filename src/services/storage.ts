import {Problem} from '../models/Problem';
import {ProblemStatistics} from '../models/ProblemStatistics';

export function getPromblemsList(): Array<{
  problem: Problem;
  problemStatistics: ProblemStatistics;
}> {
  const result: string | null = localStorage.getItem('problemsList');
  if (!result) return [];

  const problemsList: Array<{
    problem: Problem;
    problemStatistics: ProblemStatistics;
  }> = JSON.parse(result).problemsList;
  return problemsList;
}

export function setProblemsList(
  list: Array<{problem: Problem; problemStatistics: ProblemStatistics}>
) {
  const storageObject = {
    problemsList: list,
  };

  localStorage.setItem('problemsList', JSON.stringify(storageObject));
}
