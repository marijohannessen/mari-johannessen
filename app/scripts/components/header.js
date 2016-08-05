const React = require('react');
import Nav from './Nav';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <header className="header">
        <div className="header__info">
          <h1>Mari Johannessen</h1>
          <h3>Front-End Developer</h3>
        </div>
        <Nav navItems={this.props.navItems} />
      </header>
    )
  }
};
