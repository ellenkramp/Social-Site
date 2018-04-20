import React from 'react';
import './index.css';
import { Link }  from 'react-router-dom';
import List from './Sup.js';

let currentUser = "Ellen";

let Greeting = () =>
  <div>
    <br />
        <img 
        alt=""
        src="http://www.hypebot.com/.a/6a00d83451b36c69e201b7c8cd59ee970b-600wi"
        width="100" />
        <h1>Welcome, {currentUser}</h1>
  </div>

let Home = () =>
    <div>
        <Greeting />
        <Link to="/"> Home </Link>
        <Link to="/users"> All Users </Link>
        <Link to="/userid"> Your Profile </Link>
    </div>

export default Home;
export {currentUser};