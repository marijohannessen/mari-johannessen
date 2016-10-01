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
