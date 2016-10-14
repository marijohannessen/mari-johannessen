import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  addHoverState = () => {
    this.refs.link.style.backgroundImage = 'linear-gradient(rgba(230,168,255, .95),rgba(230,168,255, .95)),url(' + this.props.imgUrl + ')';
  }

  removeHoverState = () => {
    this.refs.link.style.backgroundImage = 'linear-gradient(rgba(230,168,255, 1),rgba(230,168,255, 1)),url(' + this.props.imgUrl + ')';
  }

  render() {
    const link = this.props.link;
    const label = this.props.label;
    const heading = this.props.heading;
    const double = this.props.double;
    const pageLink = this.props.pageLink;
    const centered = this.props.centered;
    const desc = this.props.desc;
    const imgUrl = this.props.imgUrl;

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
      <a ref="link" href={link} target="_blank" className={classNames} onFocus={this.addHoverState} onBlur={this.removeHoverState} onMouseOver={this.addHoverState} onMouseLeave={this.removeHoverState}>
        <div className="tile__info">
          <h1 className="tile__heading">{heading}</h1>
          <p className="tile__desc">{desc}</p>
        </div>
        <p href={link} className="tile__view-more">View Project</p>
      </a>
    )
  }
};

export default Tile;
