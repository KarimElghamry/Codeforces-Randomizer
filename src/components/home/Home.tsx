import React, {ReactElement, useState} from 'react';
import {Problem} from '../../models/Problem';
import {ProblemStatistics} from '../../models/ProblemStatistics';
import Header from '../header/Header';
import Topics from '../topics/Topics';
import Snackbar from '../snackbar/Snackbar';
import ProblemsSection from '../problems-section/ProblemsSection';
import {getRandomProblem} from '../../services/problems';
import {
  setProblemsListToStorage,
  clearProblemsList,
} from '../../services/storage';
import ClearButton from '../clear-button/ClearButton';
import Options from '../options/Options';
import styled from 'styled-components';
import Footer from '../footer/Footer';

interface Props {
  initialProblemsList: Array<{
    problem: Problem;
    problemStatistics: ProblemStatistics;
  }>;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Home: React.FC<Props> = (props: Props): ReactElement => {
  const [errContent, setErrContent] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTopics, setSelectedTopics] = useState<Array<string>>([]);
  const [problemsList, setProblemsList] = useState<
    Array<{problem: Problem; problemStatistics: ProblemStatistics}>
  >(props.initialProblemsList);

  const triggerError: (content: string) => void = (content: string) => {
    setErrContent(content);
    setVisible(true);
  };

  const randomizeProblem: (ratings: {
    min: number;
    max: number;
  }) => void = async (ratings: {min: number; max: number}): Promise<void> => {
    try {
      const newProblem = await getRandomProblem(selectedTopics, ratings);
      const newProblemsList = problemsList.concat(newProblem);
      setProblemsListToStorage(newProblemsList);
      setProblemsList(newProblemsList);
    } catch (e) {
      triggerError(e.message);
    }
  };

  const clearProblemsHistory = (): void => {
    clearProblemsList();
    setProblemsList([]);
  };

  return (
    <Container>
      <Header></Header>

      <Topics
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
        triggerError={triggerError}
      ></Topics>
      <Options onRandomize={randomizeProblem}></Options>
      <ProblemsSection problemsList={problemsList}></ProblemsSection>

      <ClearButton
        onClick={clearProblemsHistory}
        disabled={problemsList.length === 0}
      ></ClearButton>

      <Footer></Footer>

      <Snackbar
        type="error"
        content={errContent}
        visible={visible}
        timeout={2000}
        onCancel={() => setVisible(false)}
      ></Snackbar>
    </Container>
  );
};

export default Home;
