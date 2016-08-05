const React = require('react');
const $ = require('jQuery');

export default class Codepens extends React.Component {
  constructor() {
    super();
  }

  getCodepens() {
    console.log('hello');
  }

  render() {

    return (
      <ul>
        {this.getCodepens}
      </ul>
    )
  }
};
