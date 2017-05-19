import React from 'react';

class BlogPost extends React.Component {

  render() {
    const content = require(`../posts/${this.props.mdfile}`);
    return (
      <div className="blog-post">
        <div className="blog-post__header" style={{ backgroundImage: `url(${this.props.feature})`}}></div>
        <h1>{this.props.title}</h1>
        <p className="blog-post__ingress">{this.props.ingress}</p>
        <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    );
  }
}

export default BlogPost;
