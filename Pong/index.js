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

    noEscape();
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

/*solid spot for the factory function that controls(paddle 1 + 2, ) */

function MFDOOM($id) {
    var allcaps = {};
    allcaps.id = $id;
    allcaps.y = $(id).css('top');
    allcaps.speedY = 0;
}

var paddle1 = MFDOOM('#p1paddle');
var paddle2 = MFDOOM('#p2paddle');

/* speaking of caps lets talk about keycaps and how keys presses will be used */

var key = {
'UP': 87,
'DOWN': 83,
'UP2': 38,
'DOWN2': 40,
};

function handleKeyDown(event) {
    var bruh = event.which;
    if (bruh === key.UP) {

    }
}

function handleKeyUp(event) {
    var bruhR = event.which;
    if (bruhR === key.UP) {

    }
}

/* gotta make those speeds actually mean something to the position of the paddles */

function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
}

/*Do I need a redrawGameItem() function in this case */


/* uhhhh make the paddles not fly away */

function noEscape() {
    if ( blalbla.y > 360) {
        blalbala.y = 360;
    } if (blabalaba.y < 0) {
        blabala.y = 0;
    } if (blabala2.y > 360) {
        blabala2.y = 360;
    } if (blabala2.y < 0) {
        blabala2.y = 0;
    }
}

/* how do I call a specific ID's x or speedX??? (for things like the handlekey functions) */
/* Do i need 2 handlekeup/down functions??? */
/* Did i set up the factory function + key correctly in this situation */
/*Do I need a redrawGameItem() function in this case */