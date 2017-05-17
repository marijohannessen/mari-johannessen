import React from 'react';

class Codepen extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.type  = 'text/javascript';
    script.src   = '//production-assets.codepen.io/assets/embed/ei.js';
    document.head.appendChild(script);
  }

  render() {
    return (
      <li className="codepen">
        {/*<h2>{this.props.title}</h2>*/}
        <p data-height="300" data-theme-id="29600" data-slug-hash={this.props.hash} data-default-tab="result" data-user="marijoha" data-embed-version="2" data-pen-title={this.props.title} className="codepen"></p>
      </li>
    );
  }
}

export default Codepen;
