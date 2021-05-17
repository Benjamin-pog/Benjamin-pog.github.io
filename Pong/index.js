/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram() {
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
        allcaps.positionY = parseFloat($($id).css('top'));
        allcaps.positionX = parseFloat($($id).css('left'));
        allcaps.width = $($id).width();
        allcaps.height = $($id).height();
        allcaps.speedY = 0;
        allcaps.speedX = 0;
        return allcaps;  
    }

    var paddle1 = MFDOOM('#p1paddle');
    var paddle2 = MFDOOM('#p2paddle');
    var ball = MFDOOM('#ball');

    //randomly generated direction and angle for the starting ball

    function reallyBruh() {
        var idk = Math.ceil(Math.random() * 2);
        if (idk === 2) {
            ball.speedY = Math.random() * 2.5;
        } else {
            ball.speedY = Math.random() * -2.5;
        }
        if (ball.speedY === 0 || Math.abs(ball.speedY) < 0.3) {
            reallyBruh();
        } 
        var idk2 = Math.ceil(Math.random() * 2); //Seperate from the first idk function to make sure the ball can head all directions
        if (idk2 === 2) {
            ball.speedX = 1;
        } else {
            ball.speedX = -1;
        }
    }
    reallyBruh();  

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
    tooFar();
    handleAllCollisions();
    work();
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

    /* My attempt at making the keys actually move the paddles */

    function handleKeyDown(event) {
        if (event.which === key.UP) {
            paddle1.speedY = -5;
        } if (event.which === key.DOWN) {
            paddle1.speedY = 5;
        } if (event.which === key.UP2) {
            paddle2.speedY = -5;
        } if (event.which === key.DOWN2) {
            paddle2.speedY = 5;
        }
    }

    function handleKeyUp(event) {
        if (event.which === key.UP2) {
            paddle2.speedY = 0;
        } if (event.which === key.DOWN2) {
            paddle2.speedY = 0;
        } if (event.which === key.UP) {
            paddle1.speedY = 0;
        } if (event.which === key.DOWN) {
            paddle1.speedY = 0;
        }
    }

    //Make the Paddles collision with wall

    function tooFar() {
        if (paddle1.positionY < 0) {
            paddle1.positionY = 0;
        } if (paddle1.positionY > 360) {
            paddle1.positionY = 360;
        } if (paddle2.positionY < 0) {
            paddle2.positionY = 0;
        } if (paddle2.positionY > 360) {
            paddle2.positionY = 360;
        }
    }    
    /*Helping the redraw function work by making the speed mean something */

    function repositionGameItem() {
    ball.positionX += ball.speedX;
    ball.positionY += ball.speedY;
    paddle1.positionY += paddle1.speedY;
    paddle2.positionY += paddle2.speedY;
    }

    /*Redrawing positions every tick */

    function redrawGameItem() {
        $(paddle1.id).css("top", paddle1.positionY);
        $(paddle2.id).css("top", paddle2.positionY);
        $('#ball').css("top", ball.positionY);
        $('#ball').css("left", ball.positionX);
    }

    //Ball collision and movement

    function doCollide(obj1, obj2) { 
        obj1.leftX = obj1.positionX; 
        obj1.topY = obj1.positionY;
        obj1.rightX = obj1.positionX + obj1.width;
        obj1.bottomY = obj1.positionY + obj1.height;
        obj2.leftX = obj2.positionX;
        obj2.topY = obj2.positionY;
        obj2.rightX = obj2.positionX + obj2.width;
        obj2.bottomY = obj2.positionY + obj2.height;

        if ((obj1.rightX > obj2.leftX) &&
            (obj1.leftX < obj2.rightX) &&
            (obj1.bottomY > obj2.topY) &&
            (obj1.topY < obj2.bottomY)) { //fix the pinch glitch
            return true;                  
        } else {
            return false;
        }

    }
    //paddle collisions + wall collision + inc speed
    function handleAllCollisions() {

        if (doCollide(paddle1, ball) || doCollide(paddle2, ball)) {
            ball.speedX = ball.speedX * -1.24;
        } if (ball.speedX > 7.6) {
            ball.speedX = 7.6;
        } if (ball.positionY < 0) {
            ball.speedY = ball.speedY * -1;
        } if (ball.positionY > 420) {
            ball.speedY = ball.speedY * -1;
        } if (doCollide(paddle1, ball)) {
            $('#ball').css("background-color", "blue");
        } if (doCollide(paddle2, ball)) {
            $('#ball').css("background-color", "red");
        }
    }

    //scores

    var score = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var score2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function work() {
        var scoreboard = score[0];
        var scoreboard2 = score2[0];
        if (ball.positionX < 0) {
            score2.shift();
            ball.positionX = 220;
            ball.positionY = 220;
            ball.speedX = 0;
            ball.speedY = 0;
            $('#ball').css("background-color", "white");
            reallyBruh();
        } if (ball.positionX > 420) {
            score.shift();
            ball.positionX = 220;
            ball.positionY = 220;
            ball.speedX = 0;
            ball.speedY = 0;
            $('#ball').css("background-color", "white");
            reallyBruh();
        } if (scoreboard > 9 || scoreboard2 > 9) {
            endGame(); 
        } if (scoreboard > 9) {
            $('#gg').text('Blue Wins!');
            $('#gg').css("color", "blue");
        } if (scoreboard2 > 9) {
            $('#gg').text('Red Wins!');
            $('#gg').css("color", "red");
        }
        $('#p1score').text(scoreboard);
        $('#p2score').text(scoreboard2);
    }
}