const React = require('react');
// import Nav from './Nav';
// import SocialMedia from './SocialMedia';

export default class NewHeader extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <header className="main__header">
        <h1 className="main__header--title"><span>Mari</span> Johannessen</h1>
        <h2 className="main__header--subtitle">Front-End Developer</h2>

        <p className="main__header--intro">Based in Austin, TX.</p>
        <p className="main__header--intro">Currently building the Bluemix Design System at IBM Design.</p>
        <p className="main__header--intro">Passionate about smart and organized code, creative user interactions and beautiful minimalistic design.</p>

      </header>
    )
  }
};
