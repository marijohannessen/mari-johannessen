import React from 'react';
import SectionList from './SectionList';

class Blogposts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogposts: '',
      hidden: true
    };
  }

  componentDidMount() {
    this.getBlogposts(this.props.blogposts);
  }

  getBlogposts(data) {
    this.setState({
      blogposts: this.props.blogposts
    });
  }

  fixBorders(evt) {
    const prev = evt.currentTarget.previousSibling;
    if (prev) {
      prev.classList.add('hideBorder');
    }
  }

  removeBorders(evt) {
    const prev = evt.currentTarget.previousSibling;
    if (prev) {
      prev.classList.remove('hideBorder');
    }
  }

  renderItems(key) {
    const blogpost = this.state.blogposts[key];
    const title = blogpost.title;
    const link = blogpost.link;
    const date = blogpost.date;
    const niceDate = new Date(date);
    let formattedDate;
    let mm = (niceDate.getMonth() + 1).toString();
    let dd = niceDate.getDate();
    let yyyy = niceDate.getFullYear();
    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;
    formattedDate = mm + "." + dd + "." + yyyy;

    return (
      <li key={key} onMouseOver={this.fixBorders.bind(this)} onMouseOut={this.removeBorders.bind(this)}>
        <a href={link} target="_blank" className="title">{title}</a>
        <p className="date">{formattedDate}
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
          <path d="M476.213 238.105L400 161.893v61.213H0v30h400v61.214"/>
        </svg>
        </p>
      </li>
    );
  }

  render() {
    return <SectionList classNames="section" viewAllLink="http://marijohannessen.github.io" viewAllText="Read the Blog" listHeading="Recent Blog Posts" list={this.state.blogposts} renderMethod={this.renderItems.bind(this)} />;
  }
};

export default Blogposts;
