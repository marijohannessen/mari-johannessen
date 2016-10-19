'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Header from './scripts/components/Header';
import Footer from './scripts/components/Footer';
import Codepens from './scripts/components/Codepens';
import Tiles from './scripts/components/Tiles';
import Tweets from './scripts/components/Tweets';
import Projects from './scripts/components/Projects';
import Intro from './scripts/components/Intro';
import Blogposts from './scripts/components/Blogposts';
import InteractiveApp from './scripts/InteractiveApp';
import SocialMedia from './scripts/components/SocialMedia';
import SideHeader from './scripts/components/SideHeader';

import { hashHistory } from 'react-router';
import 'babel-polyfill';

const $ = require('jQuery');
require('./scss/main.scss');

// <App />
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loading2: true,
      data: [],
      blogposts: {},
    }

    setTimeout(() => {
      [... document.querySelectorAll('.social-media__btn')].forEach(btn => {
        btn.style.opacity = '1';
      });
    }, 1000);
  }

  componentDidMount() {
    window.addEventListener('scroll', (evt) => {
      this.checkScroll();
    });
  }

  checkScroll() {
    let topPos = window.scrollY;
    let height = (document.querySelector('.intro').clientHeight - 400);
    if (topPos > height) {
      document.querySelector('.sidenav').classList.add('top');
    } else if (topPos < height){
      document.querySelector('.sidenav').classList.remove('top');
    } else if (topPos === 0) {
      document.querySelector('.sidenav').classList.remove('top');
    }
    let projects;
    if (document.querySelector('#projects')) {
      projects = document.querySelector('#projects').getBoundingClientRect().top;
    }
    if (projects) {
      const body = document.body.getBoundingClientRect().top;
      const offset = projects - body;
      const links = document.querySelectorAll('.page-link');
      if (topPos > 180) {
        setTimeout(() => {
          document.querySelector('.projects').classList.add('expand');
        }, 300);
        links.forEach(link => {
          if (topPos < 1100) {
            if (link.hash === '#projects') {
              link.parentElement.classList.add('active');
            }
          } else {
            link.parentElement.classList.remove('active');
          }
        });
      } else {
        links.forEach(link => {
          if (link.hash === '#projects') {
            link.parentElement.classList.remove('active');
          }
        });
      }
      if (topPos > 1156) {
        setTimeout(() => {
          document.querySelector('#codepens').classList.add('expand');
        }, 300);
        links.forEach(link => {
          if (topPos > 1100) {
            if (link.hash === '#codepens') {
              link.parentElement.classList.add('active');
            }
          } else {
            link.parentElement.classList.remove('active');
          }
        });
      } else {
        links.forEach(link => {
          if (link.hash === '#codepens') {
            link.parentElement.classList.remove('active');
          }
        });
      }
    }
  }

  getCallback() {
    console.log('callback');
  }

  getError() {
    console.log('error');
  }

  loadBlogposts() {
    this.setState({
      blogposts : require('./scripts/data/blogposts'),
      loading2: false
    });
  }

  render() {

    return (
    <div>
      <div className="container dark-theme">
        <SideHeader />
        <Intro />
        <Projects />
        <Footer />
      </div>
    </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
