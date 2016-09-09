import React from 'react';

class SectionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listHeading = this.props.listHeading;
    const list = this.props.list;

    return (
      <div data-section className={this.props.classNames}>
        <h3 className="section__heading">{listHeading}</h3>
        <ul className="section__list">
          {Object.keys(list).map(this.props.renderMethod)}
        </ul>
        <a href={this.props.viewAllLink} className="section__btn">{this.props.viewAllText}</a>
      </div>
    )
  }
};

export default SectionList;
