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

Let's start by creating a simple `package.json` in the root of your project. You can do this by executing the following command in your terminal.

```
npm init -y
```

You then need to install webpack in order to use it in your application.

```
npm install --save-dev webpack
```

### Create the necessary folders and files

**You can skip this step if you already have an existing project for this tutorial.**

Let's create a simple app for demo purposes. Create a folder named `app`, and a file named `index.js` inside it.

#### app/index.js

```
const myFunction = () => {
  console.log('webpack is cool!');
}

myFunction();
```

Create a new folder named `dist`, and add a file named `index.html` inside it.

#### dist/index.html

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>

  <body>
  </body>

</html>
```

Your folder structure should now look like this:

```markup
├── app
|   ├── index.js
├── dist
|   ├── index.html
└── package.json
```

You then need to add a npm script to run the webpack command. So in your package.json, you can simply add the following to scripts:

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack"
}
```

Running `npm run build` will not work yet because you need to create a `webpack.config.js` file first.

### Create the config file

Create a file called `webpack.config.js` in the root of your application. This is where we will configure webpack to do what we want.

Open the `webpack.config.js` file in your favorite code editor, and start by importing `path`.

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

### Define the entry and output points

Next, we want to tell webpack the main entry point for our application. Our main entry point is the `index.js` file located inside the `app` folder.

#### webpack.config.js

```
var path = require('path');

module.exports = {
  entry: './app/index.js'
};
```

Webpack also needs to know where to put the bundled file, so next we are going to define the output values. The first one is what you want the file to be called - the default here is `bundle.js`. You will then want to tell webpack to put the bundled file in your `dist` folder.

#### webpack.config.js

```
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

You can now run the command `npm run build`, and voila - your `index.js` file is now processed by webpack and placed in your dist folder renamed to `bundle.js`.

Go back to your `index.html` file and import the `bundle.js` file right before your closing `body` tag.

#### dist/index.html

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>

  <body>
    <script src="bundle.js"></script>
  </body>

</html>
```


Open `index.html` in your browser, and you will now see our message in the console. Pretty cool, right? 

**This is the very first step of how to create a webpack config. In a later tutorial, I will explain how to use webpack to compile your `scss` and a few other cool things.**





