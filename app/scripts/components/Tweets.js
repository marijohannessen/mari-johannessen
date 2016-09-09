import React from 'react';
import SectionList from './SectionList';

class Tweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: '',
      hidden: true
    };
  }

  componentDidMount() {
    // this.getTweets(this.props.tweets);
    document.addEventListener('scroll', () => {
      const section = document.querySelector('[data-section]');
      if (document.body.scrollTop > (section.offsetHeight + 100)) {
        this.setState({
          hidden: false
        })
      }
    });
  }

  // getTweets(tweets) {
  //   const pens = [... tweets.getElementsByTagName('item')];
  //   let array = Object.keys(pens)
  //     .map((key) => {
  //       const newArr = Array.prototype.slice.call(pens[key].children);
  //       return newArr;
  //     });
  //   this.setState({
  //     codepens: array
  //   });
  // }

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
    const tweet = this.state.tweets[key];
    const title = tweet[0].innerHTML;
    const link = tweet[1].innerHTML;
    const date = tweet[6].innerHTML;
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
    return <SectionList classNames="section" viewAllLink="http://www.twitter.com/JohannessenMari" viewAllText="View All Tweets" listHeading="Recent Tweets" list={this.state.tweets} renderMethod={this.renderItems.bind(this)}/>;
  }
};

export default Tweets;
