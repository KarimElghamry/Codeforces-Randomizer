import React, {ReactElement} from 'react';
import * as assets from '../../assets';

const Header: React.FC = (): ReactElement => {
  return (
    <div>
      <img width={300} src={assets.images.codeforcesLogo} alt=""></img>
    </div>
  );
};

export default Header;
