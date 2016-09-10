const React = require('react');
import SocialMediaBtn from './SocialMediaBtn';
import SocialMedia from './SocialMedia';

export default class SideHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="sidenav">
        {/*<div className="logo">
          <h3>M<span>ari</span></h3>
          <h3>J<span>ohannessen</span></h3>
        </div>*/}
        <p>MENU</p>
        <ul>
          <li>Featured</li>
          <li>Codepens</li>
          <li>Projects</li>
          <li>Get in touch</li>
        </ul>
        {/*<SocialMedia />*/}
      </nav>
    )
  }
};
