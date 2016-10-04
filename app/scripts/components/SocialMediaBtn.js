import React from 'react';

class SocialMediaBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li style={{opacity: 0}} className="social-media__btn">
        <a href={this.props.link} target="_blank">
          {this.props.svgFile}
        </a>
      </li>
    )
  }
};

export default SocialMediaBtn;
