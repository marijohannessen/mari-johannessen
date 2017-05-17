'use strict';

import React from 'react';
import Footer from './Footer';
import Projects from './Projects';
import Intro from './Intro';
import Contact from './Contact';
import Blog from './Blog';
import Codepens from './Codepens';
import About from './About';

require('../scss/main.scss');

// <App />
class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <Intro />
          <Projects />
          {/*<Codepens />*/}
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
