import React from 'react';
import { Link } from "react-router-dom";
import Icon from '../assets/logo.png';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='header'>
      <div className='left_side'>
        <img src={Icon} alt="logo" />
        <Link to="/">
          <h1>Aegis</h1>
        </Link>
      </div>
      <div className='right_side'>
        <Link to="/">Home</Link>
        <Link to="/about">Analyse</Link>
        <Link to="/test">Test</Link>
      </div>
    </div>
  )
}

export default Navbar;
