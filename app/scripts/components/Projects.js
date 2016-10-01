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
          <Tile heading="Sleet" link="http://portfolio.marijohannessen.com/weather.html" label="Weather App" desc="Made with React and Javascript" centered />
          <Tile heading="How Much?" link="http://portfolio.marijohannessen.com/currency.html" label="Currency Converter" desc="Made with React and Javascript" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" desc="Made with React and Javascript" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" desc="Made with React and Javascript" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" desc="Made with React and Javascript" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" desc="Made with React and Javascript" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" desc="Made with React and Javascript" centered />
          <Tile heading="HipsterHop" link="http://portfolio.marijohannessen.com/hipsterhop.html" label="Flat Login Design" desc="Made with React and Javascript" centered />
        </div>
      </div>
    )
  }
};

export default Projects;
