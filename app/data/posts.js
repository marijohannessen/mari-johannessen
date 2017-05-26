/* eslint-disable */
 module.exports = [
  {
    "title": "Your first Webpack config",
    "link": "your-first-webpack-config",
    "date": "May 25th, 2017",
    "keywords": "webpack, javascript, config, beginner, tutorial, blog, bundle",
    "desc": "Learn how to write your first Webpack config.",
    "img": "",
    "__content": "\n\nChances are that you've heard of Webpack by now. A lot of people are praising it, and a lot of people are struggling with learning it. I definitely fell in the latter category, and that is why I decided to write this short tutorial on how to get up and running with Webpack.\n\n### What is Webpack?\n\nShort story is that Webpack is a module bundler for JavaScript applications. It processes your application and packages all the modules your application needs into a small number of bundles to be loaded by the browser.\n\n### Installation\n\nYou first need to install webpack in order to use it in your application.\n\n```\nnpm install --save-dev webpack\n```\n\nI prefer to add a npm script to run the webpack command. So in your package.json, you can simply add:\n\n```\n\"scripts\": {\n  \"start\": \"webpack --config webpack.config.js\"\n}\n```\n\nRunning `npm run start` will not work yet because you need to create a `webpack.config.js` file first.\n\n### Create the config file\n\nCreate a file called `webpack.config.js` in the root of your application. This is where we will configure webpack to do what we want.\n\nNext, in your terminal, run `npm install path --save-dev`. We are going to use `path` in the `webpack.config.js` file.\n\nOnce that is done, open the `webpack.config.js` file in your favorite code editor, and start by importing `path`.\n\n#### webpack.config.js\n\n```\nvar path = require('path');\n```\n\nWe're then going to create the webpack object:\n\n#### webpack.config.js\n\n```\nvar path = require('path');\n\nmodule.exports = {\n\n};\n```\n\n\n"
  },
  {
    "title": "Create a spinning wheel with CSS and Tweenmax",
    "ingress": "Learn how to create a spinning wheel with CSS and Tweenmax.",
    "link": "spinning-wheel-css-tweenmax",
    "date": "May 21st, 2017",
    "keywords": "css,tweenmax,spinning,wheel,tutorial,blog,animation,draggable,scss,gsap",
    "desc": "Learn how to create a spinning wheel with CSS and Tweenmax.",
    "img": "https://cloud.githubusercontent.com/assets/5447411/26431898/75c85b48-40bd-11e7-991c-d3cb5bab5203.png",
    "__content": "\n\nWelcome to my first blog post! I decided to kick this off with a small tutorial on how to create a spinning wheel with CSS and Tweenmax. If you make anything cool with it, let me know at <a href=\"http://www.twitter.com/marisafari\" target=\"_blank\">@marisafari</a> 😃\n\n### Here is what we'll be making (give it a spin!):\n\n<p data-height=\"805\" data-theme-id=\"29654\" data-slug-hash=\"bWmyoM\" data-default-tab=\"result\" data-user=\"marijoha\" data-embed-version=\"2\" data-pen-title=\"Spinning wheel\" class=\"codepen\" />\n\nYou can view the <a href=\"http://codepen.io/marijoha/pen/bWmyoM\" target=\"_blank\">original Codepen here</a>.\n\nOkay, let's get started! \n\n## 1. Create the wheel\n\nFirst of all, let's create the wheel and the colors inside it.\n\n\n<span class=\"pro-tip\">\n  **Pro-tip:** Use <a href=\"https://emmet.io/\" target=\"_blank\">Emmet</a> to create this in one line.\n  `div.spinning-wheel>div.color*24`\n</span>\n\n#### HTML for the spinning wheel\n\n```markup\n<div class=\"spinning-wheel\">\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n</div>\n```\n\n#### SCSS for the main wheel\n\n```css\n.spinning-wheel {\n  width: 600px;\n  height: 600px;\n  position: relative;\n  overflow: hidden;\n  clip-path: circle(50% at 50% 50%);\n  transition: 2s ease;\n  cursor: pointer;\n  z-index: 1;\n}\n```\n\nI used <a href=\"http://sipapp.io/\" target=\"_blank\">Sip</a> to easily pick all the colors I needed (I used Jamie XX's album In Colors as inspiration). Sip also gives you the option to export your palette as SCSS variables, so I did that and then grouped them all into one list called `$colors`.\n\n#### SCSS for the wheel colors\n\n```\n$rich-carmine: #dc0838;\n$razzmatazz: #e00758;\n$dogwood-rose: #df1970;\n$vivid-cerise: #e5177b;\n$medium-violet-red: #d80681;\n$medium-violet-fra: #be107f;\n$dark-purple: #881f7e;\n$kingfisher-daisy: #5c2579;\n$minsk: #3f297e;\n$yale-blue: #1a3f8d;\n$fun-blue: #1e61af;\n$curious-blue: #2784c9;\n$cerulean: #169ed8;\n$java: #1fa19f;\n$elf-green: #209b6c;\n$north-texas-green: #1a9c42;\n$apple: #5eb236;\n$rio-grande: #b0cc22;\n$dandelion: #f0e622;\n$candlelight: #fbd614;\n$sun: #f9a416;\n$tango: #f07a16;\n$pomegranate: #e6471d;\n$cg-red: #e7302a;\n$utah-crimson: #D70837;\n\n$colors: $rich-carmine $razzmatazz $dogwood-rose $vivid-cerise $medium-violet-red $medium-violet-fra $dark-purple $kingfisher-daisy $minsk $yale-blue $fun-blue $curious-blue $cerulean $java $elf-green $north-texas-green $apple $rio-grande $dandelion $candlelight $sun $tango $pomegranate $cg-red $utah-crimson;\n```\n\nUse a for-loop to go through each color and give it the correct background color and rotate it slightly more than the previous color shape. We're modifying the last color a bit in order to make it fit into the circle.\n\n#### SCSS for the color shapes\n\n```\n@for $i from 1 through 25 {\n  .color:nth-child(#{$i}) {\n    transform: rotate(-#{$i * 15}deg);\n    transform-origin: left;\n    background-color: nth($colors, $i);\n  }\n}\n\n.color:last-child {\n  clip-path: polygon(0 50%, 100% 65%, 100% 0%);\n  transform: rotate(-365deg);\n}\n```\n\nAnd there you go! We have a nice and colorful spinning wheel created with SCSS and HTML only.\n\n<p data-height=\"853\" data-theme-id=\"29654\" data-slug-hash=\"RVqdvY\" data-user=\"marijoha\" data-embed-version=\"2\" data-pen-title=\"Spinning wheel part 1\" class=\"codepen\" />\n\n## 2. Add the tick\n\nWe want the spinning wheel to have a tick on the top of it, so let's go ahead and add that.\n\n#### HTML for the tick\n\nPlace the HTML for the tick above the spinning wheel HTML.\n\n```\n<div class=\"tick\"></div>\n<div class=\"spinning-wheel\">\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n  <div class=\"color\"></div>\n...\n```\n\n#### SCSS for the tick\n\n```\n.tick {\n  width: 2rem;\n  height: 6rem;\n  background-color: #333;\n  margin-bottom: -2rem;\n  z-index: 2;\n  position: relative;\n  clip-path: polygon(50% 100%, 0 0, 100% 0);\n  transform-origin: top;\n}\n```\n\nAnd there's our tick! Nice job.\n\n<p data-height=\"810\" data-theme-id=\"29654\" data-slug-hash=\"bWQZyX\" data-default-tab=\"result\" data-user=\"marijoha\" data-embed-version=\"2\" data-pen-title=\"Spinning wheel part 2\" class=\"codepen\" />\n\n## 3. Animate the wheel\n\nWe want the user to be able to drag the wheel and make it spin. Luckily, <a href=\"https://greensock.com/docs/#/HTML5/GSAP/\" target=\"_blank\">GSAP</a> offers just the right solution for us with <a href=\"https://greensock.com/docs/#/HTML5/GSAP/Utils/Draggable/\" target=\"_blank\">Draggable</a>.\n\n#### JS for the spinning wheel\n\n```\n  const tick = document.querySelector('.tick');\n  const circles = document.querySelector('.spinning-wheel');\n\n  const myDraggable = Draggable.create(circles, {\n    type:\"rotation\",\n    throwProps: true,\n  });\n```\n\nI bet you're expecting more JavaScript right now, but that's it - we're done! Super easy, right?\n\nCheck out our finished spinning wheel (and give it a drag!):\n\n<p data-height=\"810\" data-theme-id=\"29654\" data-slug-hash=\"bWmyoM\" data-default-tab=\"result\" data-user=\"marijoha\" data-embed-version=\"2\" data-pen-title=\"Spinning wheel\" class=\"codepen\" />\n\n## 5. Browser support\n\nIf you view the wheel in Firefox, you'll discover that none of the clip-paths are being applied properly. This is because Firefox currently only supports clip-paths from SVG's. So in order to fix our problem we can add a couple of SVG's with the clip-paths we need, and then reference them in the CSS.\n\n#### HTML for the SVG clip-paths\n\n```\n<!-- For Firefox support -->\n<svg width=\"0\" height=\"0\">\n  <defs>\n    <clipPath id=\"polygon-shape\" clipPathUnits=\"objectBoundingBox\">\n      <polygon points=\"0 .50, 1 1, 1 0\" />\n    </clipPath>\n  </defs>\n</svg>\n\n<!-- For Firefox support -->\n<svg width=\"0\" height=\"0\">\n  <defs>\n    <clipPath id=\"tick-shape\" clipPathUnits=\"objectBoundingBox\">\n      <polygon points=\".50 1, 0 0, 1 0\" />\n    </clipPath>\n  </defs>\n</svg>\n```\n\nTo figure out the points needed for the polygon, you simply need to divide the percentage value by 100. So 50% = .50.\n\n#### CSS for the SVG clip-paths\n\n```\n.tick {\n  width: 2rem;\n  height: 6rem;\n  background-color: #333;\n  margin-bottom: -2rem;\n  z-index: 2;\n  position: relative;\n  clip-path: polygon(50% 100%, 0 0, 100% 0);\n  // For Firefox support\n  clip-path: url(\"#tick-shape\");\n  transform-origin: top;\n}\n\n.color {\n  width: 600px;\n  height: 270px;\n  clip-path: polygon(0 50%, 100% 100%, 100% 0%);\n  right: -300px;\n  top: 150px;\n  position: absolute;\n  z-index: 2;\n  // For Firefox support\n  clip-path: url(\"#polygon-shape\");\n}\n```\n\nThe wheel is now rendering as expected in Firefox as well as Chrome and Safari (IE does not support clip-path).\n"
  }
]