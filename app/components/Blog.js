import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './Blogpost';
import SocialMedia from './SocialMedia';
import classNames from 'classnames';
import fs from 'fs';
import yamlFront from 'yaml-front-matter';
import path from 'path';
import blogposts from '../data/posts.js';

class Blog extends React.Component {
  state = {
    open: false
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.type  = 'text/javascript';
    script.src   = '//production-assets.codepen.io/assets/embed/ei.js';
    document.head.appendChild(script);
    if (window.innerWidth < 1130) {
      this.setState({
        open: false
      })
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1130) {
        this.setState({
          open: false
        })
      }
    })
  }

  handleToggleClick = (e) => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    // const blogposts = fs.readdirSync(path.join(__dirname, '/../posts'))
    //   .map(post => {
    //     return fs.readdirSync(path.join(__dirname, `/../posts/${post}`));
    //   })
    //   .map(data => {
    //     return yamlFront.loadFront(data);
    //   });

    const btnClasses = classNames({
      'blog-sidebar__btn': true,
      'is-active': this.state.open
    });
    const sidebarClasses = classNames({
      'blog-sidebar': true,
      'is-expanded': this.state.open
    });
    const blogPostsClasses = classNames({
      'blog-posts': true,
      'is-expanded': this.state.open
    });
    const test = require('img-loader!../img/coding-test.jpg');
    return (
      <section className="blog">
        <div className="blog__container">
          <div className="blog__header">
            <button onClick={this.handleToggleClick} className={btnClasses}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <Link to="/blog" className="blog__header--logo">Mari<span>Johannessen</span></Link>
            <p>| <span></span>Blog about front-end development</p>
          </div>
          <div className={sidebarClasses}>
            <ul>
              <li>
                <a href="#">Creating a spinning wheel with CSS and Tweenmax</a>
              </li>
              <li>
                <a href="#">Setting up your first Webpack configuration</a>
              </li>
            </ul>
            <div className="blog-sidebar__footer">
              <p>Blog created by <Link to="/">Mari Johannessen</Link>,<br /> front-end developer based in <br />Austin, TX.</p>
              <SocialMedia />
            </div>
          </div>
          <div className={blogPostsClasses}>
            {

              Object.keys(blogposts).map((item, key) => {
                return <BlogPost key={key} title={blogposts[item].title} ingress={blogposts[item].ingress} content={blogposts[item].__content} />
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
