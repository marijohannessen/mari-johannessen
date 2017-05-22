---
title: Create a spinning wheel with CSS and Tweenmax
ingress: Learn how to create a spinning wheel with CSS and Tweenmax.
link: spinning-wheel-css-tweenmax
date: 05-21-2017
---

Welcome to my first blog post! I decided to kick this off with a small tutorial on how to create a spinning wheel with CSS and Tweenmax. If you make anything cool with it, let me know at <a href="http://www.twitter.com/marisafari" target="_blank">@marisafari</a> 😃

### Here is what we'll be making:

<div class="top-bar">
	<div class="dots"></div>
	<div class="dots"></div>
	<div class="dots"></div>
</div>
<p data-height="805" data-theme-id="29654" data-slug-hash="bWmyoM" data-default-tab="result" data-user="marijoha" data-embed-version="2" data-pen-title="Spinning wheel" class="codepen" />

You can view the <a href="http://codepen.io/marijoha/pen/bWmyoM" target="_blank">original Codepen here</a>.

Okay, let's get started! 

## 1. Create the wheel

First of all, let's create the wheel and the colors inside it.


<span class="pro-tip">
  **Pro-tip:** Use <a href="https://emmet.io/" target="_blank">Emmet</a> to create this in one line.
  `div.spinning-wheel>div.color*24`
</span>

#### HTML for the spinning wheel

```
<div class="spinning-wheel">
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
</div>
```

#### SCSS for the main wheel

```
.spinning-wheel {
  width: 600px;
  height: 600px;
  position: relative;
  overflow: hidden;
  clip-path: circle(50% at 50% 50%);
  transition: 2s ease;
  cursor: pointer;
  z-index: 1;
}
```

I used <a href="http://sipapp.io/" target="_blank">Sip</a> to easily pick all the colors I needed (I used Jamie XX's album In Colors as inspiration). Sip also gives you the option to export your palette as SCSS variables, so I did that and then grouped them all into one list called `$colors`.

#### SCSS for the wheel colors

```
$rich-carmine: #dc0838;
$razzmatazz: #e00758;
$dogwood-rose: #df1970;
$vivid-cerise: #e5177b;
$medium-violet-red: #d80681;
$medium-violet-fra: #be107f;
$dark-purple: #881f7e;
$kingfisher-daisy: #5c2579;
$minsk: #3f297e;
$yale-blue: #1a3f8d;
$fun-blue: #1e61af;
$curious-blue: #2784c9;
$cerulean: #169ed8;
$java: #1fa19f;
$elf-green: #209b6c;
$north-texas-green: #1a9c42;
$apple: #5eb236;
$rio-grande: #b0cc22;
$dandelion: #f0e622;
$candlelight: #fbd614;
$sun: #f9a416;
$tango: #f07a16;
$pomegranate: #e6471d;
$cg-red: #e7302a;
$utah-crimson: #D70837;

$colors: $rich-carmine $razzmatazz $dogwood-rose $vivid-cerise $medium-violet-red $medium-violet-fra $dark-purple $kingfisher-daisy $minsk $yale-blue $fun-blue $curious-blue $cerulean $java $elf-green $north-texas-green $apple $rio-grande $dandelion $candlelight $sun $tango $pomegranate $cg-red $utah-crimson;
```

Use a for-loop to go through each color and give it the correct background color and rotate it slightly more than the previous color shape. We're modifying the last color a bit in order to make it fit into the circle.

#### SCSS for the color shapes

```
@for $i from 1 through 25 {
  .color:nth-child(#{$i}) {
    transform: rotate(-#{$i * 15}deg);
    transform-origin: left;
    background-color: nth($colors, $i);
  }
}

.color:last-child {
  clip-path: polygon(0 50%, 100% 65%, 100% 0%);
  transform: rotate(-365deg);
}
```

And there you go! We have a nice and colorful spinning wheel created with SCSS and HTML only.

<p data-height="853" data-theme-id="29654" data-slug-hash="RVqdvY" data-user="marijoha" data-embed-version="2" data-pen-title="Spinning wheel part 1" class="codepen" />

## 2. Add the tick

We want the spinning wheel to have a tick on the top of it, so let's go ahead and add that.

#### HTML for the tick

Place the HTML for the tick above the spinning wheel HTML.

```
<div class="tick"></div>
<div class="spinning-wheel">
  <div class="color"></div>
  <div class="color"></div>
  <div class="color"></div>
...
```

#### SCSS for the tick

```
.tick {
  width: 2rem;
  height: 6rem;
  background-color: #333;
  margin-bottom: -2rem;
  z-index: 2;
  position: relative;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  transform-origin: top;
}
```

And there's our tick! Nice job.

<p data-height="810" data-theme-id="29654" data-slug-hash="bWQZyX" data-default-tab="result" data-user="marijoha" data-embed-version="2" data-pen-title="Spinning wheel part 2" class="codepen" />

## 3. Animate the wheel

We want the user to be able to drag the wheel and make it spin. Luckily, <a href="https://greensock.com/docs/#/HTML5/GSAP/" target="_blank">GSAP</a> offers just the right solution for us with <a href="https://greensock.com/docs/#/HTML5/GSAP/Utils/Draggable/" target="_blank">Draggable</a>.

#### JS for the spinning wheel

```
  const tick = document.querySelector('.tick');
  const circles = document.querySelector('.spinning-wheel');

  const myDraggable = Draggable.create(circles, {
    type:"rotation",
    throwProps: true,
  });
```

I bet you're expecting more JavaScript right now, but that's it - we're done! Super easy, right?

Check out our finished spinning wheel (and give it a drag!):

<p data-height="810" data-theme-id="29654" data-slug-hash="bWmyoM" data-default-tab="result" data-user="marijoha" data-embed-version="2" data-pen-title="Spinning wheel" class="codepen" />
