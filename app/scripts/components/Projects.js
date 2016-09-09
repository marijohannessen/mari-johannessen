import React from 'react';
import Tile from './Tile';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="projects">
        <h3 className="section__heading">Projects</h3>
        <div>
          <Tile heading="Sleet" link="http://portfolio.marijohannessen.com/weather.html" label="Weather App" centered />
          <Tile heading="How Much?" link="http://portfolio.marijohannessen.com/currency.html" label="Currency Converter" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" centered />
        </div>
      </div>
    )
  }
};

export default Projects;
