import React from 'react';
import marked from 'marked';
import DocumentMeta from 'react-document-meta';

class FullBlogPost extends React.Component {
  componentDidMount() {
    const meta0 = document.createElement('meta');
    const meta1 = document.createElement('meta');
    const meta2 = document.createElement('meta');
    const meta3 = document.createElement('meta');
    const meta4 = document.createElement('meta');
    const meta5 = document.createElement('meta');
    meta1.name = 'twitter:card';
    meta1.content = 'summary_large_image';
    meta0.name = 'twitter:site';
    meta0.content = '@marisafari';
    meta2.name = 'twitter:creator';
    meta2.content = '@marisafari';
    meta3.name = 'twitter:title';
    meta3.content = `${this.props.title}`;
    meta4.name = 'twitter:description';
    meta4.content = `${this.props.desc}`;
    meta5.name = 'twitter:image';
    meta5.content = `${this.props.img}`;
    document.head.append(meta1);
    document.head.append(meta0);
    document.head.append(meta2);
    document.head.append(meta3);
    document.head.append(meta4);
    document.head.append(meta5);
  }

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
    const avatar = require('../img/website-mari.png');
    return (
      <div className="blog-post blog-post--full">
        <DocumentMeta {...meta} />
        <div className="blog-post__header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="blog-post__container">
          <div className="blog-post__info">
            <div className="blog-post__info--avatar">
              <img src={avatar} />
            </div>
            <div>
              <p className="blog-post__info--date">{this.props.date}</p>
              <a href="http://www.twitter.com/marisafari" target="_blank" className="blog-post__info--author">Mari Johannessen</a>
            </div>
            <ul>
              <li>
                <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?text="${this.props.title}"&url=http://marijohannessen.com/blog/${this.props.link}&via=marisafari`} target="_blank">
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410.2 410.2">
                    <path d="M403.6 74.2c-9.1 4-18.6 7.2-28.3 9.5C386 73.5 394 60.8 398.6 46.6c1.3-4.1-3.1-7.6-6.8-5.4-13.5 8-28 14-43.2 17.9-.9.2-1.8.3-2.7.3-2.8 0-5.5-1-7.6-2.9-16.2-14.2-36.9-22.1-58.5-22.1-9.3 0-18.8 1.5-28 4.3-28.7 8.9-50.8 32.5-57.7 61.7-2.6 10.9-3.3 21.9-2.1 32.6.1 1.2-.4 2.1-.8 2.5-.6.7-1.5 1.1-2.4 1.1h-.3c-62.8-5.8-119.4-36.1-159.4-85.1-2-2.5-6-2.2-7.6.6-7.8 13.4-12 28.8-12 44.5 0 24 9.6 46.6 26.4 63-7-1.7-13.8-4.3-20.2-7.8-3.1-1.7-6.8.5-6.9 4-.4 35.6 20.4 67.3 51.6 81.6h-1.9c-5 0-10-.5-14.9-1.4-3.4-.7-6.3 2.6-5.3 6 10.1 31.7 37.4 55 70 60.3-27.1 18.2-58.6 27.8-91.4 27.8H6.7c-3.2 0-5.8 2.1-6.6 5.1-.8 3 .7 6.2 3.4 7.7 37 21.5 79.1 32.9 122 32.9 37.5 0 72.5-7.4 104.2-22.1 29-13.4 54.7-32.7 76.3-57.1 20.1-22.8 35.8-49.1 46.7-78.2 10.4-27.7 15.9-57.3 15.9-85.6v-1.3c0-4.5 2.1-8.8 5.6-11.7 13.6-11 25.4-24 35.2-38.6 2.5-4.1-1.5-8.9-5.8-7z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
        </div>
      </div>
    );
  }
}

export default FullBlogPost;
