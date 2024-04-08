import React from 'react';
import Icon from '../assets/encrypt2.png';
import { Link } from "react-router-dom";
import Icon from '../assets/encrypt.png';
import "../styles/Navbar.css";

function header() {
  return (
    <div className='header'>
      <div className='left_side'>
        <img src={Icon} />
        <Link to="/">
        <h1>Aegis</h1>
        </Link>
      </div>
      <div className='right_side'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>
      </div>
    </div>
  )
}

export default header
