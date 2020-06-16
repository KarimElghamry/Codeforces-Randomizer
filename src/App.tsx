import React, {ReactElement} from 'react';
import Snackbar from './components/snackbar/Snackbar';

const App: React.FC<{}> = (): ReactElement => {
  const errorContent: string = 'eminem is the eaaheiraaaaaaaaaSAjjwer';
  return (
    <div>
      <Snackbar type="error" content={errorContent} visible={true}></Snackbar>
    </div>
  );
};

export default App;
