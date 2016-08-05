'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
import Header from './scripts/components/Header';
import Codepens from './scripts/components/Codepens';

require('./scss/main.scss');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Navigation = ReactRouter.Navigation;
const History = ReactRouter.History;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const Rebase = require('re-base');

import 'babel-polyfill';

// <App />
class App extends React.Component {
  componentDidMount() {
  }

  render() {
    const navItems = {
      navItem1: {
        text: 'Home',
        active: 'active'
      },
      navItem2: {
        text: 'Projects'
      },
      navItem3: {
        text: 'About'
      },
      navItem4: {
        text: 'Blog'
      },
      navItem5: {
        text: 'Contact'
      },
    };
    return (
      <div className="container">
        <Header navItems={navItems} />
        <Codepens />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
