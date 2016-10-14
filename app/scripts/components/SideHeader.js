const React = require('react');
import SocialMediaBtn from './SocialMediaBtn';
import SocialMedia from './SocialMedia';

export default class SideHeader extends React.Component {
  constructor() {
    super();
  }

  scrollToSection = (evt) => {
    evt.preventDefault();
    const links = [... document.querySelectorAll('.page-link')];
    links.forEach(link => {
      if (evt.currentTarget === link) {
        link.parentElement.classList.add('active');
      } else {
        link.parentElement.classList.remove('active');
      }
    })
    const id = evt.currentTarget.hash.substring(1);
    const section = document.getElementById(id);
    let element = section.getBoundingClientRect().top;
    console.log(element);
    if (id === 'projects') {
      element = 856;
    } else if (id === 'about') {
      element = 1597;
    }
    const body = document.body.getBoundingClientRect().top;
    const offset = element - 0;
    if (document.getElementById(id)) {
      console.log(offset);
      window.scrollTo(0, (offset - 100));
    }
  }

  render() {
    return (
      <nav className="sidenav">
        <ul className="menu">
          <li><a onClick={this.scrollToSection} className="page-link" href="#projects">Projects</a></li>
          <li><a href="http://marijohannessen.github.io">Blog</a></li>
          <li><a href="mailto:mari.l.johannessen@gmail.com">Get in touch</a></li>
          <li><SocialMedia /></li>
        </ul>
      </nav>
    )
  }
};
