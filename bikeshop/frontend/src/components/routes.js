import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from '../App.js';
import aboutpage from '../aboutpage';
import Buyabike from '../buyabike';

export default (
  <Router>
    <Route Path='/' component={App} />
    <Route path='aboutpage' component={aboutpage} />
    <Route path='buyabike' component={Buyabike} />
  </Router>
);