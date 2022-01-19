# Animated Portfolio

Introductory Lab - Personal Profile

* *Date Created*: 10 01 2022
* *Last Modification Date*: 17 01 2022
* *Lab URL*: [https://web.cs.dal.ca/~osler/csci3172/lab1/](https://web.cs.dal.ca/~osler/csci3172/lab1/)
* *Git URL*: [https://git.cs.dal.ca/osler/l1_osler_liam](https://git.cs.dal.ca/osler/l1_osler_liam)

## Author
[Liam Osler](liamosler.ca)

## Deployment
Deployed to Dal's FCS web hosting per lab instructions:
https://web.cs.dal.ca/~osler/csci3172/lab1/


## Getting Started

This Lab uses the Bootstrap library. [Check out their getting started guide](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for more details on setup.

### Prerequisites
[Bootstrap 4.0](https://getbootstrap.com/docs/4.0/)
is imported via CDN for this project.

## Project file structure:

I am going to segment the project in to files called main.js and main.css

```java
.
├── README.md
├── images
├── index.html
├── scripts
│   └── main.js
└── styles
    └── main.css
```

# index.html:


First, a simple HTML5 page snippet from Visual Studio Code:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Liam Osler</title>
    </head>

    <body>
        <!-- body content goes here -->
    </body>
</html>
```

First we import Bootstrap's CSS and Javascript files at their appropriate locations:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
```

We import the CSS file in the ```<head>``` section of the document and the javascript in the ```<body>```, giving us:

```html
<!-- Author: Liam Osler -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Document</title>
    </head>

    <body>
        <!-- Bootstrap scripts: -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
```


Next, we will implement a container and row to contain our content:

```html

<div class="container-fluid">
    <!-- a row with the header of the project -->
    <div class="row">
        <div class="col-xl">
            <h1 class="display-1 my-name">Liam Osler</h1>
        </div>
    </div>
    <hr>
    <!-- a row with a link to my homepage and social media accounts: -->
    <div class="row">
        <div class="col-12">
            <p class="display-3">find me online:</a>
        </div>
        <div class="col-sm">
            <a href = "http://www.liamosler.ca" class="display-4">personal website</a>
        </div>
        <div class="col-sm">
            <a class="display-4" href= "https://github.com/LiamOsler">github profile</a>
        </div>
        <div class="col-sm">
            <a class="display-4" href= "https://github.com/LiamOsler">youtube channel</a>
        </div>
    </div>  
    <hr>

    <!-- a row with links to past projects and other work I wish to highlight  -->
    <div class="row">
        <div class="col-12">
            <p class="display-3">sample projects:</a>
        </div>

        <div class="col-sm">
            <a href = "http://liamosler.ca/demos/rss-aggregator/" class="display-4">news aggregator</a>
            <p> </p>
            <p>scrapes local news rss feeds for nova scotia, developed with php and js - <a href = "https://github.com/LiamOsler/rss-aggregator"> source on github</a></p>
        </div>
    
    <!-- for brevity, I have excluded the links to my other projects -->
    
    </div>
    <hr>
    <!-- a row with a link to my homepage and social media accounts: -->
    <div class="row">
        <div class="col-12">
            <p class="display-3">contact me:</a>
        </div>
        <div class="col-sm">
            <a href = "mailto:liam.osler@dal.ca" class="display-4">liam.osler@dal.ca</a>
        </div>
    </div>  
    <hr>
</div>
```

main.css:
```css
/* CSS for CSCI3172 Lab 1 */
/* Global overrides: */
/* using a font-size transition is a visually pleasing way to draw attention to a link: */
a{
    transition: font-size 1s;
    font-size: 1em;
}

a:hover{
    font-size: larger;
}

/* My name, the page header, in a business card style: */
.my-name{
    font-size: 8em;
}

/* Page Typography: */
.display-1{
    font-size: 10em;
    transition: font-size 0.5s;
}

.display-1:hover{
    font-size: 12em;
}

.display-2{
    font-size: 5em;
    transition: font-size 0.5s;
}

.display-3{
    font-size: 4em;
}

.display-4{
    font-size: 3em;
    transition: font-size 0.5s;
}

.display-4:hover{
    font-size: 3.5em;
}
```

I created a subtle background animation using HTMl canvas. To overlay the content of the page with it, the canvas and content layers are overlayed using ```position: absolute``` and the canvas kept from scrolling by wrapping it in a div with class ```canvas-layer``` with ```z-index: 0``` and then using ```overflow-y: scroll ``` on the content-layer so it scrolls vertically. Here is the content of the javascript:

Basically, we generate an array of circles with randomized directions and velocities, and move them around the screen. If the mouse gets close to one of the circles, we then make it expand:

```javascript
//Coordinate Inverse function (returns distance):
function coordinateInverse(x1, y1, x2, y2){ 
    return Math.hypot(x2-x1, y2-y1)
}

//Generates a random color code in Hex (hard fixed to grey right now)
function randomColor(){
   return "E8E8E8";
}

//Function that returns a random bit of either 1 or -1:
function bitFlipper(){
   return directionRandomization = Math.round(Math.random()) * 2 - 1;
}

var circles = [];
var radiusVariance = 10;
var velocityVariance = 1;
function randomizeCircleArray(){
   for(let i = 0; i < 100; i++){
       //Randomize the position and radius of the circles:
       var curRadius = 10 + Math.floor(Math.random() * radiusVariance);
       var curPosX = midX + (Math.floor(Math.random()*100))*bitFlipper();
       var curPosY = midY + (Math.floor(Math.random()*100))*bitFlipper();
       var curVelX = ((Math.random() * velocityVariance))*bitFlipper();
       var curVelY = ((Math.random() * velocityVariance))*bitFlipper();
       var curColor = "#" + randomColor();
       //Create a circle object based on the random values:
       var currentCircle = circleFactory(curPosX, curPosY, curVelX , curVelY, curRadius, curColor);
      
       //Add the 
       circles.push(currentCircle);        
   }
}

//clears the contents of the circle array, if it need to be regenerated
function clearCircleArray(){
    for(let i = 0; i < 100; i++){
        circles.pop(i);
    }
}

//posX: center x position, posY:  center y position, velX: the x velocity component, velY: the y velocity component, radius: the radius of the circle 
function circleFactory(posX, posY, velX, velY, radius, color){
   var currentCircle = {
       "posX": posX,
       "posY": posY,
       "velX": velX,
       "velY": velY,
       "radius" : radius,
       "color" : color,
       "collisionState": false,
       "activeStatus": false,
   }
   return currentCircle;
}

//function for drawing circleObjects on the canvas:
function drawCircle(circleObject){
   ctx.fillStyle = circleObject.color;
   ctx.strokeStyle = circleObject.color;

   if(circleObject.collisionState == true){
    circleObject.radius +=1;
   }
   if(circleObject.collisionState == false){
    circleObject.radius =10;
   }

   ctx.beginPath();
   ctx.arc(circleObject.posX, circleObject.posY, circleObject.radius, 0, 2 * Math.PI);
   ctx.stroke();
   ctx.fill();
}

function drawCircleArray(){
   for(let i = 0; i < circles.length; i++){
       drawCircle(circles[i]);
   }
}

//Move the circles around, but keeps them within the bounds of the page:
function animateCircleArray(){
   for(let i = 0; i < circles.length; i++){
       circles[i].posX += circles[i].velX;
       circles[i].posY += circles[i].velY;

       if(circles[i].posX - circles[i].radius < minX || circles[i].posX + circles[i].radius > maxX){
           circles[i].velX *= -1; 
       }
       if(circles[i].posY - circles[i].radius < minY || circles[i].posY + circles[i].radius > maxY){
           circles[i].velY *= -1; 
       }
   }
}

//checks if circles collide with the mouse:
function circleCollisionDetection(){
   for(let i = 0; i < circles.length; i++){
        var distance = coordinateInverse(mouseX, mouseY, circles[i].posX, circles[i].posY);
        if(distance< 50 + circles[i].radius){
            circles[i].collisionState = true;
        }
        else{
            circles[i].collisionState = false;
        }
    }
}

//Basic canvas setup:
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//Canvas geometry:
var minX , maxX, minY, maxY, midX , midY;
//Mouse position:
var mouseX, mouseY; 
//Animation frames:
c.addEventListener("mousemove", function(e) { 
   var cRect = c.getBoundingClientRect();        // Gets CSS pos, and width/height
   mouseX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
   mouseY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
});

regenerate = false;
var frameCount = 0;
function frameCounter(){
   frameCount++;
}

//init function, create the initial values for the canvas window 
function init(){
   ctx.canvas.width = 4096;
   ctx.canvas.height = window.innerHeight;
   minX = 0;
   maxX = 4096;
   minY = 0;
   maxY = window.innerHeight;
   midX = window.innerWidth/2;
   midY = maxY/2;
   //Set frame count to 0?
   randomizeCircleArray();
   //Setting up some random stuff to draw:
   //These can be removed from init:
   ctx.lineWidth = 10;
   ctx.strokeStyle = "#FFFFFF"
}

//Animation function:
var animationState = true;
var gameState;
function animate(){
    if(regenerate == true){
        clearCircleArray();
        randomizeCircleArray();
        regenerate = false;
    }

    if(animationState == true){
        animateCircleArray();
        circleCollisionDetection();
    }   
}
//Main draw function:
function draw(){
    drawCircleArray();
}

//Main runner for the canvas:
function run() {
   frameCounter();
   // Clear the canvas:
   ctx.clearRect(0, 0, c.width, c.height);
   animate();
   draw();
   setTimeout(run, 1000 / 60); // 60 fps   
}

//Canvas must be init to create circle array before run loop can be used:
init();
// Start the animation
run();
```

## Sources Used
[Bootstrap - Introduction](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

[W3Schools - CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
