import React, {ReactElement, useState} from 'react';
import Snackbar from './components/snackbar/Snackbar';
import Header from './components/header/Header';
import Topics from './components/topics/Topics';

const App: React.FC<{}> = (): ReactElement => {
  const [errContent, setErrContent] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedTopics, setSelectedTopics] = useState<Array<string>>([]);
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
      <button onClick={() => triggerError('test error')}>CLICK</button>
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
    </div>
  );
};

export default App;
