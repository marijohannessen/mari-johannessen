import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './Blogpost';
import FullBlogPost from './FullBlogPost';
import SocialMedia from './SocialMedia';
import classNames from 'classnames';
import fs from 'fs';
import yamlFront from 'yaml-front-matter';
import path from 'path';
import blogposts from '../data/posts.js';
import DocumentMeta from 'react-document-meta';

class Blog extends React.Component {
  state = {
    open: false
  }

  constructor(props) {
    super(props);
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
    const meta = {
      title: 'Mari Johannessen | Blog',
      description: 'Blog about front-end development created by Mari Johannessen.',
      canonical: 'http://www.marijohannessen.com/blog',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'front-end, development, blog, front end, developer, tutorials, blogs, tutorial, web',
        },
      }
    };
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
      'is-expanded': this.state.open,
      'blog-posts__full': (!this.props.match.params.post === undefined)
    });
    const blogContent = (this.props.match.params.post === undefined)
    ? (
      <div className={blogPostsClasses}>
        {
          Object.keys(blogposts).map((item, key) => {
            return <BlogPost key={key} desc={blogposts[item].desc} img={blogposts[item].img} link={blogposts[item].link} title={blogposts[item].title} ingress={blogposts[item].ingress} content={blogposts[item].__content} keywords={blogposts[item].keywords} date={blogposts[item].date} />
          })
        }
      </div>
    )
    :
    (
      <div className={blogPostsClasses}>
        {
          Object.keys(blogposts).map((item, key) => {
            if (blogposts[item].link === this.props.match.params.post) {
              return  <FullBlogPost key={key} desc={blogposts[item].desc} img={blogposts[item].img} link={blogposts[item].link} title={blogposts[item].title}  ingress={blogposts[item].ingress} content={blogposts[item].__content} keywords={blogposts[item].keywords} date={blogposts[item].date} />
            }
          })
        }
      </div>
      )
    ;
    return (
      <section className="blog">
        <DocumentMeta {...meta} />
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
              {
                Object.keys(blogposts).map((item, key) => {
                  return (
                    <li key={key}>
                      <Link to={`/blog/${blogposts[item].link}`}>{blogposts[item].title}</Link>
                    </li>
                  )
                })
              }
            </ul>
            <div className="blog-sidebar__footer">
              <p>Blog created by <Link to="/">Mari Johannessen</Link>,<br /> front-end developer based in <br />Austin, TX.</p>
              <SocialMedia />
            </div>
          </div>
          {blogContent}
        </div>
      </section>
    );
  }
}

export default Blog;
