import axios, { AxiosRequestConfig } from "axios";
import { Problem } from "../models/Problem";
import { ProblemStatistics } from "../models/ProblemStatistics";
import { getTags } from "./data";
import LogicalOperator from "../models/LogicalOperator";

const baseUrl: string = "https://codeforces.com/api/problemset.problems";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

// codeforces API only allows for AND operations
// OR operations are implemented manually
async function getProblems(
  topics: string[],
  operator: LogicalOperator,
): Promise<[Problem[], ProblemStatistics[]]> {
  let problems: Problem[] = [];
  let problemsStatistics: ProblemStatistics[] = [];

  if (operator === "AND") {
    const tags: string = topics.reduce(
      (prev: string, current: string, _: number) => {
        return prev + ";" + current;
      },
    );

    const response = await axios.get(baseUrl, {
      params: {
        tags: tags,
      },
    });

    if (response.data.status !== "OK") throw new Error("Invalid combination");

    problems = response.data.result.problems as Array<Problem>;
    problemsStatistics = response.data.result
      .problemStatistics as Array<ProblemStatistics>;
  } else if (operator === "OR") {
    for (const topic of topics) {
      const response = await axios.get(baseUrl, {
        params: {
          tags: topic,
        },
      });

      if (response.data.status !== "OK") throw new Error("Invalid combination");

      problems = problems.concat(response.data.result.problems as Problem);
      problemsStatistics = problemsStatistics.concat(
        response.data.result.problemStatistics as ProblemStatistics,
      );
    }
  }

  return [problems, problemsStatistics];
}

export async function getRandomProblem(
  topics: Array<string>,
  ratings: { min: number; max: number },
  operator: LogicalOperator,
): Promise<{ problem: Problem; problemStatistics: ProblemStatistics }> {
  if (topics.length === 0)
    topics = topics.concat(getTags()[getRandomInt(getTags().length)]);

  const [problems, problemsStatistics] = await getProblems(topics, operator);

  let filteredProblems: Array<number> = [];
  problems.forEach((val: Problem, index: number) => {
    if (!val.rating) val.rating = ratings.min;

    if (val.rating >= ratings.min && val.rating <= ratings.max)
      filteredProblems = filteredProblems.concat(index);
  });

  if (filteredProblems.length === 0)
    throw new Error(
      `No problems found for the entered combination. Try another combination.`,
    );

  const probIndex: number =
    filteredProblems[getRandomInt(filteredProblems.length)];
  return {
    problem: problems[probIndex],
    problemStatistics: problemsStatistics[probIndex],
  };
}
