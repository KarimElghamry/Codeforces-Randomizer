import axios, { AxiosRequestConfig } from "axios";
import { Problem } from "../models/Problem";
import { ProblemStatistics } from "../models/ProblemStatistics";
import { getTags } from "./data";
import LogicalOperator from "../models/LogicalOperator";

const baseUrl: string = "https://codeforces.com/api/problemset.problems";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getFilteredProblems(handle: string, problems: Problem[], problemsStatistics: ProblemStatistics[]): Promise<[Problem[], ProblemStatistics[]]> {
  let finalProblems: Problem[] = [];
  let finalProblemsStatistics: ProblemStatistics[] = [];

    const url = `https://codeforces.com/api/user.status?handle=${handle}`;
    
    try {
      const response = await axios.get(url);

      if (response.data.status !== "OK") {
        throw new Error("Invalid handle");
      }

      let solvedProblems: Set<string> = new Set();
      for (const submission of response.data.result) {
        if (submission.verdict === "OK") {
          solvedProblems.add(`${submission.problem.contestId}${submission.problem.index}`);
        }
      }


      problems.forEach((problem: Problem, index: number) => {
        if (!solvedProblems.has(`${problem.contestId}${problem.index}`)) {
          finalProblems.push(problem);
          finalProblemsStatistics.push(problemsStatistics[index]);
        }
      });

    } catch (error) {
      // Check if the error is an Axios error
      if (error.response && error.response.status === 400) {
        throw new Error(`handle: User with handle ${handle} not found`);
      } else {
        throw error;
      }
    }
  return [finalProblems, finalProblemsStatistics];

}


// codeforces API only allows for AND operations
// OR operations are implemented manually
async function getProblems(
  topics: string[],
  operator: LogicalOperator,
  handle: string
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

  
  if (handle.trim() !== "") {
    return getFilteredProblems(handle, problems, problemsStatistics);
  }
  return [problems, problemsStatistics];

}

export async function getRandomProblem(
  topics: Array<string>,
  ratings: { min: number; max: number },
  operator: LogicalOperator,
  handle: string,
): Promise<{ problem: Problem; problemStatistics: ProblemStatistics }> {
  if (topics.length === 0)
    topics = topics.concat(getTags()[getRandomInt(getTags().length)]);

  const [problems, problemsStatistics] = await getProblems(topics, operator, handle);

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
