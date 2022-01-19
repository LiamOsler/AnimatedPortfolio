//Coordinate Inverse function (returns distance):
function coordinateInverse(x1, y1, x2, y2){ 
    return Math.hypot(x2-x1, y2-y1)
}

//Generates a random color code in Hex:
function randomColor(){
   return "E8E8E8";
}

console.log(randomColor());

//Function that returns a random bit of either 1 or -1:
function bitFlipper(){
   return directionRandomization = Math.round(Math.random()) * 2 - 1;
}

var playerRadius = 25;

var startingPosition ={
    "posX" : "",
    "posY" : "",
    "radius" : 25,
    "color" : "#00FF00"
};

var endingPosition ={
    "posX" : "",
    "posY" : "",
    "radius" : "",
    "color" : "#FF0000"
};

function randomizeStartFinish(){
    startingPosition.posX = Math.random()*maxX;
    startingPosition.posY = Math.random()*maxY;
    endingPosition.posX = Math.floor(Math.random()*maxX);
    endingPosition.posY = Math.floor(Math.random()*maxY);
    endingPosition.radius = startingPosition.radius + 10;
}

function drawStartFinish(){
    drawCircle(startingPosition);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Start Here", 20, 20);

    drawCircle(endingPosition);
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

function clearCircleArray(){
    for(let i = 0; i < 100; i++){
        circles.pop(i);
    }
}

//Method for constructing circle objects:
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
    circleObject.radius =50;
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

function circleCollisionDetection(){
   for(let i = 0; i < circles.length; i++){
        var distance = coordinateInverse(mouseX, mouseY, circles[i].posX, circles[i].posY);
        //console.log(distance);

        if(distance< 50 + circles[i].radius){
            circles[i].collisionState = true;
        }
        else{
            circles[i].collisionState = false;
        }

    }
}

function drawCursor(){
   ctx.fillStyle = "#FF0000";
   ctx.beginPath();
   ctx.arc(mouseX, mouseY, playerRadius, 0, 2 * Math.PI);
   ctx.fill();
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
   ctx.canvas.width = window.innerWidth;
   ctx.canvas.height = window.innerHeight;
   minX = 0;
   maxX = window.innerWidth;
   minY = 0;
   maxY = window.innerHeight;
   midX = maxX/2;
   midY = maxY/2;
   //Set frame count to 0?

   randomizeCircleArray();
   randomizeStartFinish();

   //Setting up some random stuff to draw:
   //These can be removed from init:
   ctx.lineWidth = 10;
   ctx.strokeStyle = "#FFFFFF"
}

var animationState = true;
var gameState;
function animate(){
    if(regenerate == true){
        clearCircleArray();
        randomizeCircleArray();
        randomizeStartFinish();
        regenerate = false;
    }

    if(animationState == true){
        animateCircleArray();
        circleCollisionDetection();
    }   
}

function draw(){
    drawCircleArray();
}


function run() {
   frameCounter();
   // Clear the canvas:
   ctx.clearRect(0, 0, c.width, c.height);
   animate();
   draw();
   setTimeout(run, 1000 / 60); // 60 fps   
}



init();
// Start the animation
run();