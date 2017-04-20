'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Intro from './components/Intro';
import SocialMedia from './components/SocialMedia';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-61267854-1');

require('./scss/main.scss');

// <App />
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container dark-theme">
          <Intro />
          <Projects />
        </div>
      </div>
    );
  }
}

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" onUpdate={logPageView} component={App} />
  </Router>,
  document.querySelector('#app'),
);
