import React, {ReactElement, useState} from 'react';
import Snackbar from './components/snackbar/Snackbar';
import Header from './components/header/Header';
import Topics from './components/topics/Topics';

const App: React.FC<{}> = (): ReactElement => {
  const content: string = 'emiwnewienmwe';
  const [visible, setVisible] = useState<boolean>(true);
  const [selectedTopics, setSelectedTopics] = useState<Array<string>>([]);
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
      <button onClick={() => setVisible(true)}>CLICK</button>
      <Topics
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
      ></Topics>
      <Snackbar
        type="error"
        content={content}
        visible={visible}
        timeout={2000}
        onCancel={() => setVisible(false)}
      ></Snackbar>
    </div>
  );
};

export default App;
