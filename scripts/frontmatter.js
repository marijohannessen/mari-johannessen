/* eslint-disable */

const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const path = require('path');

const renderFrontMatter = () => {
  const dir = path.resolve(__dirname, '..');
  const posts = fs.readdirSync(`${dir}/app/posts/`)
  let itemsProcessed = 0;
  let content = [];
  posts.forEach(post => {
    itemsProcessed++;
    content.push(yamlFront.loadFront(fs.readFileSync(`${dir}/app/posts/${post}`)));
    if (itemsProcessed === posts.length) {
      fs.writeFileSync(`${dir}/app/data/posts.js`, `/* eslint-disable */\n module.exports = ${JSON.stringify(content, null, 2)}`);
    }
  });
};

renderFrontMatter();
