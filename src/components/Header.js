import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  /* let btnName = 'Login';

  const changeBtn = () => {
    if (btnName == 'Login') {
      btnName = 'Logout';
    } else {
      btnName = 'Login';
    }
    console.log('btn changed to ', btnName); //it will got get updated in UI that's why use useState() hook
  }; */

  const [btnName, setBtnName] = useState('Login');
  const changeBtn = () => {
    if (btnName == 'Login') {
      setBtnName('Logout');
    } else {
      setBtnName('Login');
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={changeBtn}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
