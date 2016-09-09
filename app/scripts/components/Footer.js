const React = require('react');

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <footer className="footer">
        <div className="footer__info">
          <h3>Mari Johannessen</h3>
          <h3>Front-End Developer</h3>
        </div>
      </footer>
    )
  }
};
