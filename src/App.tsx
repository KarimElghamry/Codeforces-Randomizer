import React, {ReactElement, useState} from 'react';
import Snackbar from './components/snackbar/Snackbar';

const App: React.FC<{}> = (): ReactElement => {
  const errorContent: string = 'Maximum 4 selected Components';
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>CLICK</button>
      <Snackbar
        type="error"
        content={errorContent}
        visible={visible}
        onCancel={() => setVisible(false)}
      ></Snackbar>
    </div>
  );
};

export default App;
