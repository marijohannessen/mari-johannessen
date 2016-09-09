import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const link = this.props.link;
    const label = this.props.label;
    const heading = this.props.heading;
    const double = this.props.double;
    const pageLink = this.props.pageLink;
    const centered = this.props.centered;

    let tile;
    let classNames = "tile";

    if (double) {
      classNames = "tile double";
    }

    if (pageLink) {
      classNames = "tile pagelink";
    }

    if (centered) {
      classNames = "tile centered";
    }

    return (
      <a href={link} className={classNames}>
        <span className="tile__label">{label}</span>
        <h1 className="tile__heading">{heading}</h1>
      </a>
    )
  }
};

export default Tile;
