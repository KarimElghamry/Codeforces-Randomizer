import { Problem } from "../models/Problem";
import { ProblemStatistics } from "../models/ProblemStatistics";
import { minRating, maxRating } from "./data";
import Ratings from "../models/Ratings";

// TODO: refactor to module/class

// Problems
export function getPromblemsListFromStorage(): Array<{
  problem: Problem;
  problemStatistics: ProblemStatistics;
}> {
  const result: string | null = localStorage.getItem("problemsList");
  if (!result) return [];

  const problemsList: Array<{
    problem: Problem;
    problemStatistics: ProblemStatistics;
  }> = JSON.parse(result).problemsList;
  return problemsList;
}

export function setProblemsListToStorage(
  list: Array<{ problem: Problem; problemStatistics: ProblemStatistics }>,
): void {
  const storageObject = {
    problemsList: list,
  };

  localStorage.setItem("problemsList", JSON.stringify(storageObject));
}

export function deleteProblemFromStorage(problem: Problem): void {
  const problems = getPromblemsListFromStorage().filter(
    (v) => v.problem.index !== problem.index,
  );

  setProblemsListToStorage(problems);
}

export function clearProblemsList(): void {
  localStorage.setItem("problemsList", JSON.stringify({ problemsList: [] }));
}

// ratings
export function getRatingsFromStorage(): Ratings {
  const result: string | null = localStorage.getItem("ratings");
  if (!result) return { min: minRating, max: maxRating };

  const ratings = JSON.parse(result) as Ratings;
  return ratings;
}

export function setRatingsToStorage(ratings: Ratings): void {
  localStorage.setItem("ratings", JSON.stringify(ratings));
}
