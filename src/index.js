import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Sup from './Sup.js';
import User from './User.js';

let TopLevel = () =>
        <Router>
            <div>
                <Route path="/" component={Home} />
                <Route path="/users" component={Sup} />
                <Route path="/userid" component={User} />
            </div>
        </Router>

ReactDOM.render(<TopLevel />, document.getElementById('root'));
registerServiceWorker();
