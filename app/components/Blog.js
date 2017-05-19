import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './Blogpost';

class Blog extends React.Component {

  render() {
    const test = require('img-loader!../img/coding-test.jpg');
    return (
      <section className="blog">
        <div className="blog__container">
          <div className="blog-sidebar">
            <Link to="/" className="main-link">marijohannessen.com</Link>
            <h3>Recent posts</h3>
            <ul>
              <li>
                <a>Test post</a>
              </li>
              <li>
                <a>Test post</a>
              </li>
              <li>
                <a>Test post</a>
              </li>
              <li>
                <a>Test post</a>
              </li>
              <li>
                <a>Test post</a>
              </li>
            </ul>
          </div>
          <div className="blog-posts">
            <BlogPost feature={test} title="Test with long title" ingress="This is a test post with an ingress explaining the blog post a little bit." mdfile="test-post.md" />
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
