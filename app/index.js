'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route, IndexRoute, Link } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-61267854-1');

require('./scss/main.scss');

// <App />
class App extends React.Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog}></Route>
      </main>
    );
  }
}

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router onUpdate={logPageView}>
    <App />
  </Router>,
  document.querySelector('#app')
);
