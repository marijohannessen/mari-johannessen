const React = require('react');
import Header from './Header';

export default class Intro extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="intro">
        <Header navItems={this.props.navItems} />
        <h1>Hello there.</h1>
        <h3>I am a <span class="bold">Front End Developer</span> with a passion for<br /> great design, creative interactions and writing smart code.</h3>
        <h3>I also like to <a href="http://www.codepen.io/marijohannessen">play around with Codepen</a>, <a href="http://marijohannessen.github.io">write</a> and <a href="http://www.spotify.com/marijohannessen">listen to music</a>.</h3>
        <div className="arrow">
          <svg viewBox="0 0 54 54">
            <g>
              <path d="M27 1c14.36 0 26 11.64 26 26S41.36 53 27 53 1 41.36 1 27 12.64 1 27 1z"/>
              <path d="M27 54C12.112 54 0 41.888 0 27S12.112 0 27 0s27 12.112 27 27-12.112 27-27 27zm0-52C13.215 2 2 13.215 2 27s11.215 25 25 25 25-11.215 25-25S40.785 2 27 2z"/>
            </g>
            <path d="M27 40.5c-.552 0-1-.447-1-1v-26c0-.553.448-1 1-1s1 .447 1 1v26c0 .553-.448 1-1 1z" fill="#000"/>
            <path fill="#000" d="M27 41.914L16.293 31.207l1.414-1.414L27 39.086l9.293-9.293 1.414 1.414"/>
          </svg>
        </div>
      </div>
    )
  }
};
