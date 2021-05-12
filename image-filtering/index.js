// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here

    applyFilterNoBackground(reddify);

    //applyFilter(reddify);
    //applyFilter(decreaseBlue);
    //applyFilter(increaseGreenByBlue);

    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here
function applyFilter(filterFunction) {
    for (var o = 0; o < image.length; o++) {
        for (var p = 0;  p < image[o].length; p++) {
            rgbString = image[o][p];
            var rgbNumbers = rgbStringToArray(rgbString);
            filterFunction(rgbNumbers);
            rgbString = rgbArrayToString(rgbNumbers);
            image[o][p] = rgbString;
        }
    }
}

// TODO 5: Create the applyFilterNoBackground function

function applyFilterNoBackground(filterfunction) {
    for (var j = 0; j < image.length; j++) {
        for (var k = 0; k < image[j].length; k++) {
            if (image[RED] === 150 && image[BLUE] === 150 && image[GREEN] === 150) {
                image[RED] = 150;
                image[BLUE] = 150;
                image[GREEN] = 150;
            } else {    
                rgbString = image[j][k];
                var rgbNumbers = rgbStringToArray(rgbString);
                filterFunction(rgbNumbers);
                rgbString = rgbArrayToString(rgbNumbers);
                image[j][k] = rgbString;
            }
        }
    }
    
}

// TODO 2 & 4: Create filter functions

function reddify(array) { 
    array[RED] = 255;
} 

function decreaseBlue(array) {
    array[BLUE] = Math.max(array[BLUE] - 30, 0);
}

function increaseGreenByBlue(array) {
    array[GREEN] = Math.min(array[BLUE] + array[GREEN], 250);
}

// CHALLENGE code goes below here
