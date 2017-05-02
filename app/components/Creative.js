import React from 'react';
import Project from './Project';

class Creative extends React.Component {
  render() {
    const colorcontrast = require('../img/color-contrast.png');
    const watchit = require('../img/watch-it.png');
    const dashboard = require('../img/conf-dashboard.png');

    return (
      <section className="projects">
        <h1>Stuff I've written</h1>
        <div className="projects__container">
          <ul className="projects__list">
            <Project
              title="Color Contrast Checker"
              desc="A simple tool for calculating the contrast ratio between two HEX values. Based on WCAG 2.0 Level AA standards. This was my entry to the 2016 10kapart competition."
              img={colorcontrast}
              projectLink="https://marijohannessen.github.io/color-contrast-checker/"
              srcLink="https://github.com/marijohannessen/color-contrast-checker"
              github
            />
            <Project
              title="Watch it"
              desc="An React app that let's you track movies you want to watch and rate movies you have watched."
              img={watchit}
              projectLink="https://marijohannessen.github.io/watch-it/"
              srcLink="https://github.com/marijohannessen/watch-it"
              github
            />
            <Project
              title="Dashboard"
              desc="A website prototype for a fictional conference call app made with React."
              img={dashboard}
              projectLink="https://marijohannessen.github.io/conference-dashboard/"
              srcLink="https://github.com/marijohannessen/conference-dashboard"
              github
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Creative;
