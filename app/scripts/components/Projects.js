import React from 'react';
import Tile from './Tile';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      originalTiles: [
        <Tile key="tile7" keywords="react scss" heading="Conference Dashboard" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19505393/c873652c-9587-11e6-92f7-0302e0655622.png" link="https://marijohannessen.github.io/conference-dashboard/" label="Website for a fictional conference dashboard app." desc="Website for a fictional conference dashboard app." centered />,
        <Tile key="tile1" keywords="codepens scss" heading="Styled Select Dropdown" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19371857/6e4fa3da-917c-11e6-8b1e-0a83a7b614c0.png" link="http://codepen.io/marijoha/full/zKjvEw/" label="Styled and filterable select dropdown" desc="Styled and filterable select dropdown." centered />,
        <Tile key="tile2" keywords="scss tools" heading="Social Media Buttons" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372240/a7693066-917f-11e6-9736-4000caa37d92.png" link="http://marijohannessen.github.io/social-media-buttons" label="Collection of social media buttons." desc="CSS Library of Social Media buttons." centered />,
        <Tile key="tile3" keywords="tools" heading="Color Contrast Checker" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372262/e6cc0e90-917f-11e6-8b8a-7de501f91cd3.png" link="http://marijohannessen.github.io/color-contrast-checker" label="Based on WCAG 2.0 Level AA standards." desc="Based on WCAG 2.0 Level AA standards." centered />,
        <Tile key="tile4" keywords="react" heading="Watch It" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372295/36774f40-9180-11e6-9984-3baed05ca309.png" link="https://marijohannessen.github.io/watch-it/" label="React App for movie tracking." desc="React App for movie tracking." centered />,
        <Tile key="tile5" keywords="codepens scss tools" heading="Box Shadow Generator" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372315/58d7e90a-9180-11e6-83b4-838b0a7d78c4.png" link="http://codepen.io/marijoha/full/GZXPLp/" label="" desc="CSS Box Shadow Generator" centered />,
      ],
      newTiles: [
        <Tile key="tile7" keywords="react scss" heading="Conference Dashboard" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19505393/c873652c-9587-11e6-92f7-0302e0655622.png" link="https://marijohannessen.github.io/conference-dashboard/" label="Website for a fictional conference dashboard app." desc="Website for a fictional conference dashboard app." centered />,
        <Tile key="tile1" keywords="codepens scss" heading="Styled Select Dropdown" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19371857/6e4fa3da-917c-11e6-8b1e-0a83a7b614c0.png" link="http://codepen.io/marijoha/full/zKjvEw/" label="Styled and filterable select dropdown" desc="Styled and filterable select dropdown." centered />,
        <Tile key="tile2" keywords="scss tools" heading="Social Media Buttons" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372240/a7693066-917f-11e6-9736-4000caa37d92.png" link="http://marijohannessen.github.io/social-media-buttons" label="Collection of social media buttons." desc="CSS Library of Social Media buttons." centered />,
        <Tile key="tile3" keywords="tools" heading="Color Contrast Checker" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372262/e6cc0e90-917f-11e6-8b8a-7de501f91cd3.png" link="http://marijohannessen.github.io/color-contrast-checker" label="Based on WCAG 2.0 Level AA standards." desc="Based on WCAG 2.0 Level AA standards." centered />,
        <Tile key="tile4" keywords="react" heading="Watch It" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372295/36774f40-9180-11e6-9984-3baed05ca309.png" link="https://marijohannessen.github.io/watch-it/" label="React App for movie tracking." desc="React App for movie tracking." centered />,
        <Tile key="tile5" keywords="codepens scss tools" heading="Box Shadow Generator" imgUrl="https://cloud.githubusercontent.com/assets/5447411/19372315/58d7e90a-9180-11e6-83b4-838b0a7d78c4.png" link="http://codepen.io/marijoha/full/GZXPLp/" label="" desc="CSS Box Shadow Generator" centered />,
      ],
      selectedValues: [],
    }
  }

  filterList = (evt) => {
    let value = evt.currentTarget.value;
    [... document.querySelectorAll('.projects__filter li button')].forEach(btn => {
      if (btn === evt.currentTarget) {
        btn.classList.toggle('selected');
      } else {
        btn.classList.remove('selected');
      }
    });
    let newTiles = [];
    let keywords;
    let index;
    if (evt.currentTarget.classList.contains('selected')) {
      [... this.state.originalTiles].forEach(tile => {
        index = this.state.originalTiles.indexOf(tile);
        keywords = tile.props.keywords.split(' ');
        [... keywords].forEach(keyword => {
          if (keyword === value) {
            newTiles.push(tile);
          } else {
            if (index > -1) {
              newTiles.splice(index, tile);
            }
          }
        })
      });
      this.setState({
        newTiles: newTiles,
      })
      if (value === 'all') {
        this.setState({
          newTiles: this.state.originalTiles,
        });
      }
    } else {
      evt.currentTarget.blur();
      this.setState({
        newTiles: this.state.originalTiles,
      });
    }
  }

  render() {
    const items = this.state.newTiles.map((item, i) => {
      return (
        item
      )
    });

    return (
      <div id="projects" className="projects">
        <h3 className="section__heading">Projects & Codepens</h3>
        <ul className="projects__filter">
          <li><button onClick={this.filterList} value="all">All</button></li>
          <li><button onClick={this.filterList} value="codepens">Codepens</button></li>
          <li><button onClick={this.filterList} value="react">React</button></li>
          <li><button onClick={this.filterList} value="scss">SCSS Tricks</button></li>
          <li><button onClick={this.filterList} value="tools">Tools</button></li>
        </ul>
          <div>
          {/*<ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={100}
            transitionAppear={true}
            transitionAppearTimeout={300}
            component='div'
          >*/}
            {items}
          {/*</ReactCSSTransitionGroup>*/}
          </div>
      </div>
    )
  }
};

export default Projects;
