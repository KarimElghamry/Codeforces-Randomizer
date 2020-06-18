import React, {ReactElement, useState} from 'react';
import {Problem} from '../../models/Problem';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import Header from '../header/Header';
import Topics from '../topics/Topics';
import Snackbar from '../snackbar/Snackbar';
import RandomizeButton from '../randomize-button/RandomizeButton';
import ProblemsSection from '../problems-section/ProblemsSection';
import {getRandomProblem} from '../../services/problems';
import {setProblemsListToStorage} from '../../services/storage';

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

  const randomizeProblem: () => void = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const newProblem = await getRandomProblem(selectedTopics);
      const newProblemsList = problemsList.concat(newProblem);
      setProblemsListToStorage(newProblemsList);
      setProblemsList(newProblemsList);
    } catch (e) {
      triggerError(e.message);
    }

    setIsLoading(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '10px',
        height: '100%',
        width: '100%',
      }}
    >
      <Header></Header>
      <button onClick={() => setIsLoading((prev) => !prev)}>CLICK</button>
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
      <RandomizeButton
        isLoading={isLoading}
        onClick={randomizeProblem}
      ></RandomizeButton>
      <ProblemsSection problemsList={problemsList}></ProblemsSection>
    </div>
  );
};

export default Home;
