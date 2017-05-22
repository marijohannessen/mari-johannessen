import React from 'react';
import ReactGA from 'react-ga';

class SocialMediaBtn extends React.Component {
  trackClick = evt => {
    ReactGA.event({
      category: 'Social Media Clicks',
      action: 'click',
      label: this.props.type,
    });
  };

  render() {
    return (
      <li className="social-media__btn" onClick={e => this.trackClick(e)}>
        <a href={this.props.link} target="_blank">
          {this.props.svgFile}
        </a>
      </li>
    );
  }
}

export default SocialMediaBtn;
