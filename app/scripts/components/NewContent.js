const React = require('react');
// import Nav from './Nav';
// import SocialMedia from './SocialMedia';

export default class NewContent extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <section className="main__content">
        <ul>
          <li>Codepens</li>
          <li>GitHub Repo</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Send me an email</li>
        </ul>
      </section>
    )
  }
};
