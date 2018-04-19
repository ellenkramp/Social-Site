import React from 'react';
import {supList} from './Sup.js';
import {currentUser} from './Home.js';
import './App.css';
import moment from 'moment';

let time = supList[0].time;
let text = supList[0].text;

const User = () => 
  <div>
    <h1>{currentUser}'s Sups:</h1>
    <li>{text}
    <p>{moment(time).fromNow()}</p>
    </li>
  </div>

export default User;