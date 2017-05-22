import React from 'react';
import marked from 'marked';

class BlogPost extends React.Component {

  render() {
    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
    return (
      <div className="blog-post">
        <div className="blog-post__header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="blog-post__container">
          <p className="blog-post__ingress">{this.props.ingress}</p>
          <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
        </div>
      </div>
    );
  }
}

export default BlogPost;
