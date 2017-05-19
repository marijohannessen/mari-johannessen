const React = require('react');

export default class About extends React.Component {
  render() {
    return (
      <section className="about projects">
        <h1>A little bit about me</h1>
        <div className="about__info">
          <p>I was born and raised in Norway, and became a permanent resident of USA in 2015.
            I lived in Australia for 2 years where I completed a <a href="https://www.ecu.edu.au/degrees/courses/bachelor-of-design/unitset?id=MAAAIL&crsCd=Y82" target="_blank">Bachelor's degree in Graphic Design</a>.
            I then went on to complete a second <a href="http://www.uib.no/en/studyprogramme/BAMN-DTEK" target="_blank">Bachelor's degree in Computer Science</a>.
            Being a Front-End Developer turned out to be the perfect combination of my two passions.
            <br />
            <br />
            I am currently a part of the <a href="http://www.carbondesignsystem.com" target="_blank">Carbon Design System</a> team at IBM Cloud in Austin, TX.
          </p>
          <p>
            <h2>I have experience with:</h2>
            <div className="list">
              <ul>
                <li>HTML5 and CSS3</li>
                <li>SCSS</li>
                <li>Vanilla JavaScript + ES6</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Webpack</li>
                <li>Gulp</li>
              </ul>
              <ul>
                <li>Unit testing with Jest, Jasmine and Karma</li>
                <li>Building maintainable and scalable CSS and Javascript</li>
                <li>Architecture patterns like BEM and SMACSS</li>
                <li>Working in a cross-discipline environment</li>
                <li>Building accessible and performant components and applications</li>
                <li>Building a design system from the ground up</li>
                <li>UX design</li>
              </ul>
            </div>
          </p>
        </div>
      </section>
    )
  }
};
