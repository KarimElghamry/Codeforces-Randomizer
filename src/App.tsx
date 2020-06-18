import React, {ReactElement} from 'react';
import Home from './components/home/Home';
import {getPromblemsListFromStorage} from './services/storage';

const App: React.FC<{}> = (): ReactElement => {
  const problemsList = getPromblemsListFromStorage();
  return <Home initialProblemsList={problemsList}></Home>;
};

export default App;
