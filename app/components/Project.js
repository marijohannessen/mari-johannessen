import React from 'react';

class Project extends React.Component {
  render() {
    const {
      img,
      title,
      desc,
      srcLink,
      github,
      projectLink,
    } = this.props;
    const sourceLink = github
      ? <a href={srcLink} target="_blank">View on GitHub</a>
      : <a href={srcLink} target="_blank">View on Codepen</a>;
    return (
      <li className="project">
        <div className="project__img">
          <a className="project__img--link" href={projectLink} target="_blank">
            <img src={img} />
          </a>
        </div>
        <div className="project__info">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <a href={projectLink} target="_blank">View live</a>
        {sourceLink}
      </li>
    );
  }
}

export default Project;
