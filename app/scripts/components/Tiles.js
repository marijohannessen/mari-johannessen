import React from 'react';
import Tile from './Tile';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="tiles">
        <Tile heading="Unsplash Hover Effect" link="http://codepen.io" label="Featured Codepen" />
        <Tile double heading="CSS Box Shadow Generator" link="http://marijohannessen.github.io" label="From the blog" />
        <Tile heading="Kissing by Lum" link="http://spotify.io" label="Weekly Music Pick" />
        <Tile pageLink heading="About" link="http://about" label="" />
        <Tile pageLink heading="Get in touch" link="http://contact" label="" />
      </div>
    )
  }
};

export default Tiles;
