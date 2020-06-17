import React, {ReactElement, useState} from 'react';
import {Problem} from '../../models/Problem';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import Header from '../header/Header';
import Topics from '../topics/Topics';
import Snackbar from '../snackbar/Snackbar';
import RandomizeButton from '../randomize-button/RandomizeButton';
import ProblemsSection from '../problems-section/ProblemsSection';
import {getRandomProblem} from '../../services/problems';

const problemEx: Problem = {
  contestId: 1367,
  index: 'D',
  name: 'Task on the Board',
  type: 'PROGRAMMING',
  rating: 1000,
} as Problem;

const problemStatsEx: ProblemStatistics = {
  contestId: 1367,
  index: 'D',
  solvedCount: 3139,
} as ProblemStatistics;

const Home: React.FC<{}> = (): ReactElement => {
  const [errContent, setErrContent] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTopics, setSelectedTopics] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [problemsList, setProblemsList] = useState<
    Array<{problem: Problem; problemStatistics: ProblemStatistics}>
  >([]);

  const triggerError: (content: string) => void = (content: string) => {
    setErrContent(content);
    setVisible(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Header></Header>
      <button onClick={() => setIsLoading((prev) => !prev)}>CLICK</button>
      <button
        onClick={async () => {
          const newProblem = await getRandomProblem(selectedTopics);
          setProblemsList((prev: Array<any>) => {
            return prev.concat(newProblem);
          });
        }}
      >
        CLICK
      </button>
      <Topics
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
        triggerError={triggerError}
      ></Topics>
      <Snackbar
        type="error"
        content={errContent}
        visible={visible}
        timeout={2000}
        onCancel={() => setVisible(false)}
      ></Snackbar>
      <RandomizeButton isLoading={isLoading}></RandomizeButton>
      <ProblemsSection problemsList={problemsList}></ProblemsSection>
    </div>
  );
};

export default Home;
