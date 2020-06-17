import React, {ReactElement, useState} from 'react';
import Snackbar from './components/snackbar/Snackbar';
import Header from './components/header/Header';
import Topics from './components/topics/Topics';
import RandomizeButton from './components/randomize-button/RandomizeButton';
import ProblemsSection from './components/problems-section/ProblemsSection';
import {Problem} from './models/Problem';
import {ProblemStatistics} from './models/ProblemStatistics';

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

const App: React.FC<{}> = (): ReactElement => {
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

  let myRef;
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
        onClick={() =>
          setProblemsList((prev: Array<any>) =>
            prev.concat({problem: problemEx, problemStatistics: problemStatsEx})
          )
        }
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

export default App;
