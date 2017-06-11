'use strict';

import React from 'react';
import Footer from './Footer';
import Projects from './Projects';
import Intro from './Intro';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';
import DocumentMeta from 'react-document-meta';

require('../scss/main.scss');

// <App />
class Home extends React.Component {

  render() {
    const meta = {
      title: 'Mari Johannessen | Front-End Developer',
      description: 'Mari Johannessen is an experienced Front-End Developer based in Austin, TX. She is currently working with the Carbon Design System at IBM Cloud.',
      canonical: 'http://www.marijohannessen.com',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'mari, johannessen, front end developer, front-end, developer, web, designer, austin, texas, front-end developer, girl, female, coder, blog, web development, development'
        }
      }
    };

    return (
      <div>
        <DocumentMeta {...meta} />
        <div className="container">
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
