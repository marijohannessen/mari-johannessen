const React = require('react');
import Nav from './Nav';
import SocialMedia from './SocialMedia';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <header className="header">
        <div className="header__info">
          <div className="logo">
            <h3>M<span>ari</span></h3>
            <h3>J<span>ohannessen</span></h3>
          </div>
          {/*<h1>Mari Johannessen</h1>*/}
          {/*<h3>Front-End Developer</h3>*/}
        </div>
        <Nav navItems={this.props.navItems} />
      </header>
    )
  }
};
