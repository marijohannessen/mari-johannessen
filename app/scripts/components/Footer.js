const React = require('react');

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <footer className="footer">
        <div className="footer__info">
          <h3>Handmade by <a href="mailto:mari.l.johannessen@gmail.com">Mari Johannessen</a></h3>
          <h3>Front-End Developer</h3>
        </div>
      </footer>
    )
  }
};
