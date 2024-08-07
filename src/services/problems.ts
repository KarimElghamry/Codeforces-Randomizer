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
  handle: string,
): Promise<{ problem: Problem; problemStatistics: ProblemStatistics }> {
  if (topics.length === 0)
    topics = topics.concat(getTags()[getRandomInt(getTags().length)]);

  const [problems, problemsStatistics] = await getProblems(topics, operator);

  if (problems.length === 0) {
    throw new Error(
      `No problems found for the entered topics. Try another combination.`,
    );
  }

  const [finalProblems, finalProblemsStatistics] = handle.trim().length > 0 
  ? await getFilteredProblems(handle, problems, problemsStatistics) 
  : [problems, problemsStatistics];

  if(finalProblems.length === 0) {
    throw new Error(`You solved all the problems in the entered topics. Try another combination.`);
  }



  let filteredProblems: Array<number> = [];
  finalProblems.forEach((val: Problem, index: number) => {
    if (!val.rating) val.rating = ratings.min;

    if (val.rating >= ratings.min && val.rating <= ratings.max)
      filteredProblems = filteredProblems.concat(index);
  });



  if (filteredProblems.length === 0) {
    throw new Error(
      `No problems found in the specified rating range, or all have been solved. Try another range.`,
    );
  }


  const probIndex: number =
    filteredProblems[getRandomInt(filteredProblems.length)];
  return {
    problem: finalProblems[probIndex],
    problemStatistics: finalProblemsStatistics[probIndex],
  };
}
