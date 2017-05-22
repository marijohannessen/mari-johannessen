import React from 'react';
import marked from 'marked';
import DocumentMeta from 'react-document-meta';

class FullBlogPost extends React.Component {

  render() {
    const meta = {
      title: this.props.title,
      description: this.props.ingress,
      canonical: `http://www.marijohannessen.com/blog/${this.props.link}`,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: this.props.keywords
        }
      }
    };
    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
    return (
      <div className="blog-post blog-post--full">
        <DocumentMeta {...meta} />
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

export default FullBlogPost;
