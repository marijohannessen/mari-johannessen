import React from 'react';
import Tile from './Tile';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="projects" className="projects">
        <h3 className="section__heading">Projects</h3>
        <div>
          <Tile heading="Social Media Buttons" link="http://marijohannessen.github.io/social-media-buttons" label="Collection of social media buttons." desc="CSS Library of Social Media buttons." centered />
          <Tile heading="Color Contrast Checker" link="http://marijohannessen.github.io/color-contrast-checker" label="Based on WCAG 2.0 Level AA standards." desc="Based on WCAG 2.0 Level AA standards." centered />
          <Tile heading="Watch It" link="https://marijohannessen.github.io/watch-it/" label="React App for movie tracking." desc="React App for movie tracking." centered />
          <Tile heading="Box Shadow Generator" link="http://codepen.io/marijoha/full/GZXPLp/" label="" desc="CSS Box Shadow Generator" centered />
        </div>
      </div>
    )
  }
};

export default Projects;
