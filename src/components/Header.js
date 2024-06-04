import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

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
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <a href="/about">About Us</a>
          </li> 
          anchor tag refreshes whole page. so, not recommended */}
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Order Grocery</Link>
          </li>
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
