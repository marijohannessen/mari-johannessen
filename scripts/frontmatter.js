/* eslint-disable */

const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const path = require('path');

const renderFrontMatter = () => {
  const dir = path.resolve(__dirname, '..');
  const posts = fs.readdirSync(`${dir}/app/posts/`)
  let itemsProcessed = 0;
  let content = [];
  for (let i = posts.length-1; i > -1; i--) {
    itemsProcessed++;
    content.push(yamlFront.loadFront(fs.readFileSync(`${dir}/app/posts/${posts[i]}`)));
    if (itemsProcessed === posts.length) {
      fs.writeFileSync(`${dir}/app/data/posts.js`, `/* eslint-disable */\n module.exports = ${JSON.stringify(content, null, 2)}`);
    }
  }
};

renderFrontMatter();
