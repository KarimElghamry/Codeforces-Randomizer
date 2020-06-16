import React, {ReactElement, useState} from 'react';
import Snackbar from './components/snackbar/Snackbar';
import Header from './components/header/Header';

const App: React.FC<{}> = (): ReactElement => {
  const content: string = 'emiwnewienmwe';
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div>
      <Header></Header>
      <button onClick={() => setVisible(true)}>CLICK</button>
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
