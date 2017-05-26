---
title: Your first Webpack config
link: your-first-webpack-config
date: May 25th, 2017
keywords: webpack, javascript, config, beginner, tutorial, blog, bundle
desc: Learn how to write your first Webpack config.
img: ''
---

Chances are that you've heard of Webpack by now. A lot of people are praising it, and a lot of people are struggling with learning it. I definitely fell in the latter category, and that is why I decided to write this short tutorial on how to get up and running with Webpack.

### What is Webpack?

Short story is that Webpack is a module bundler for JavaScript applications. It processes your application and packages all the modules your application needs into a small number of bundles to be loaded by the browser.

### Installation

You first need to install webpack in order to use it in your application.

```
npm install --save-dev webpack
```

I prefer to add a npm script to run the webpack command. So in your package.json, you can simply add:

```
"scripts": {
  "start": "webpack --config webpack.config.js"
}
```

Running `npm run start` will not work yet because you need to create a `webpack.config.js` file first.

### Create the config file

Create a file called `webpack.config.js` in the root of your application. This is where we will configure webpack to do what we want.

Next, in your terminal, run `npm install path --save-dev`. We are going to use `path` in the `webpack.config.js` file.

Once that is done, open the `webpack.config.js` file in your favorite code editor, and start by importing `path`.

#### webpack.config.js

```
var path = require('path');
```

We're then going to create the webpack object:

#### webpack.config.js

```
var path = require('path');

module.exports = {

};
```


