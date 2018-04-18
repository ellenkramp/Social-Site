import React, { Component } from 'react';
import logo from './logo.svg';
import {supList} from './Sup.js';
import {currentUser} from './Home.js';
import './App.css';
import Home from './Home.js';
import moment from 'moment';

let time = supList[0].time;
let text = supList[0].text;

const User = () => 
  <div>
    <h1>{currentUser}'s Sups:</h1>
    <p>{text}</p>
  </div>

export default User;