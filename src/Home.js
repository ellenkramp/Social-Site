import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Sup from './Sup.js';
import User from './User.js';
import {supList} from './Sup.js';

let currentUser = supList[0].author;

let Greeting = () =>
  <div>
    <p>
        <img 
        src="http://www.hypebot.com/.a/6a00d83451b36c69e201b7c8cd59ee970b-600wi"
        width="100" />
        <h1>Welcome, {currentUser}</h1>
    </p>
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