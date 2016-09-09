const React = require('react');
import SocialMediaBtn from './SocialMediaBtn';
import SocialMedia from './SocialMedia';

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    const navItems = this.props.navItems;
    return (
      <nav className="nav">
        <ul>
          {Object.keys(navItems).map((item, key) => {
            return <li key={key} className={navItems[item].active}>{navItems[item].text}</li>;
          })}
        </ul>
        <SocialMedia />
      </nav>
    )
  }
};
