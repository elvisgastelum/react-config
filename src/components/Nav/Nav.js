import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';
import logo from './img/react-logo.png';

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="navigation--logo">
        <img src={logo} alt="logo"/>
        <span>React Template</span>
      </div>
      <div className="navigation--links">
        <Link className="navigation--link" to="/">Home</Link>
        <Link className="navigation--link" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
