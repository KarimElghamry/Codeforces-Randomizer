import React, {ReactElement, useState} from 'react';
import Snackbar from './components/snackbar/Snackbar';
import Header from './components/header/Header';
import Topics from './components/topics/Topics';
import RandomizeButton from './components/randomize-button/RandomizeButton';

const App: React.FC<{}> = (): ReactElement => {
  const [errContent, setErrContent] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTopics, setSelectedTopics] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    </div>
  );
};

export default App;
