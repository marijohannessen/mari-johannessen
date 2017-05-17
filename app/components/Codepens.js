import React from 'react';
import Codepen from './Codepen';

class Codepens extends React.Component {
  render() {
    const colorcontrast = require('../img/color-contrast.png');
    const watchit = require('../img/watch-it.png');
    const dashboard = require('../img/conf-dashboard.png');

    return (
      <section className="projects codepens" id="projects">
        <h1>Playing around in Codepen</h1>
        <div className="projects__container">
          <Codepen hash="xRgqKG" title="Austin skyline animation" />
          <Codepen hash="zKjvEw" title="Styled and filterable dropdown" />
          <Codepen hash="mPpQQw" title="Copy to clipboard button" />
          <Codepen hash="wGGZGb" title="PX to EM calculator" />
          <Codepen hash="GZXPLp" title="CSS Box Shadow Generator" />
          <Codepen hash="yJeqJM" title="Tile hover effect" />
        </div>
      </section>
    );
  }
}

export default Codepens;
