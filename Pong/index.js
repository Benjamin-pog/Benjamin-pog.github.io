/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects

function MFDOOM($id) {
    var allcaps = {};
    allcaps.id = $id;
    allcaps.y = $($id).css('top');
    allcaps.x = $($id).css('left');
    allcaps.speedY = 0;
    allcaps.speedX = 0;
    return allcaps;  
}

var paddle1 = MFDOOM('#p1paddle');
var paddle2 = MFDOOM('#p2paddle');
var ball = MFDOOM('#ball');

/* ned this key variable to define what different keys strikes will do */

    var key = {
    'UP': 87,
    'DOWN': 83,
    'UP2': 38,
    'DOWN2': 40,
    };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);                      

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem(); 
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

/* My attempt at making the keys actually move the paddles */

/* ----------------- How do I reference the paddle1/2's speed? (Not #paddle1/2 but the variable that was created below the factoryfunction)----------------- */

    function handleKeyDown(event) {
        if (event.which === key.UP) {
            paddle.speedY = 5;
        } if (event.which === key.DOWN) {
            paddle1.speedY = -5
        }
    }

function handleKeyUp(event) {
    if (event.which === key.UP2) {
        paddle2.speedY = -5;
    } if (event.which === key.DOWN2) {
        paddle2.speedY = -5;
    }
}

/* this is simply a test because i am getting errors about the x/y position/speed being undifined */

/* -------------ARE THESE VARIABLES ACTUALLY NEEDED OR WILL BE USED?---------------- */

var speedX;
var speedY;
var positionX;
var positionY;

/*Helping the redraw function work by making the speed mean something */

function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
}

/*Redrawing positions every tick */

function redrawGameItem() {
    $("#paddle1").css("top", positionY);
    $("#paddle2").css("top", positionY);
    $('#ball').css("top", positionY);
    $('#ball').css("left", positionX);
}