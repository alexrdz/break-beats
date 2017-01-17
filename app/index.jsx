import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Route, IndexRoute, Router, hashHistory} from 'react-router'

import App from './components/App'
import Main from './components/Main'
import Home from './pages/Home'
import Breaks from './components/Breaks'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/break-time/:breakTitle' component={Breaks} />
      <IndexRoute component={App} />
    </Route>
  </Router>
), document.getElementById('app'));
