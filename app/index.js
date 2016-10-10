'use strict';

import React from 'react';
import { render } from 'react-dom';
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
    this.loadCodepens();
    this.loadBlogposts();
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
    let codepen;
    if (document.querySelector('#projects')) {
      projects = document.querySelector('#projects').getBoundingClientRect().top;
    }
    if (document.querySelector('#codepens')) {
      codepen = document.querySelector('#codepens').getBoundingClientRect().top;
    }
    if (projects && codepen) {
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

  loadCodepens() {
    $.ajax({
      url: "./app/codepen.xml",
      dataType: 'xml',
      cache: false,
      success: function(data) {
        this.setState({
          loading: false,
          data
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("./app/codepen.xml", status, err.toString());
      }.bind(this)
    });
  }

  render() {
    const navItems = {
      // navItem1: {
      //   text: 'Home',
      //   active: 'active'
      // },
      // navItem2: {
      //   text: 'Projects'
      // },
      navItem3: {
        text: 'About'
      },
      navItem4: {
        text: 'Blog'
      },
      navItem5: {
        text: 'Get in touch'
      },
    };

    if (this.state.loading) {
      return (
        <div>
          <div className="container">
            <SideHeader />
            <Intro />
            <Projects />
            <Footer />
          </div>
        </div>
      )
    }

    return (
    <div>
      <div className="container">
        <SideHeader />
        <Intro />
        <Projects />
        <Codepens data={this.state.data} />
        <Footer />
      </div>
    </div>
    )
  }
};

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/interactive" component={InteractiveApp} />
  </Router>
)

render(routes, document.querySelector('#app'));
