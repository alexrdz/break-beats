import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Route, IndexRoute, Router, hashHistory} from 'react-router'

import App from './components/App'
import Home from './pages/Home'
import Breaks from './components/Breaks'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/home' component={Home} />
      <Route path='/breaks/:breakTitle' component={Breaks} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
