/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  var key = {
    'LEFT': 37,
    'RIGHT': 39,
    'UP': 38,
    'DOWN': 40,   
  }
  // Game Item Objects
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

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
    tooFar();
  }


  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === key.LEFT) {
        speedX = -5;
        console.log('Left was slammed')
    } if (event.which === key.RIGHT) {
        speedX = 5;
        console.log('Right was flicked')
    } if (event.which === key.UP) {
        speedY = -5;
        console.log('Up was punched')
    } if (event.which === key.DOWN) {
        speedY = 5;
        console.log('Down was fired')
    }
  }

  function handleKeyUp(event) {
    if (event.which === key.LEFT) {
        speedX= 0;
        console.log('Left was helped up')
    } if (event.which === key.RIGHT) {
        speedX = 0;
        console.log('Right was bounced off')
    } if (event.which === key.UP) {
        speedY = 0;
        console.log('Up was drawn back')
    } if (event.which === key.DOWN) {
        speedY = 0;
        console.log('Down was released')
    }
  }



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }
  function redrawGameItem() {
    $("#gameItem").css("left", positionX);
    $("#gameItem").css("top", positionY);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  /* UH EXTRA STUF N STUF IDK HOW MUCH ILL DO */

  function tooFar() {
    if (positionX < 0) {
        positionX = 0;
    } if (positionX > 390) {
        positionX = 390;
    } if (positionY < 0) {
        positionY = 0;
    } if (positionY > 390) {
        positionY = 390;
    }
  }
}
