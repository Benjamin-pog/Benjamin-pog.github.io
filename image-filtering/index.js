// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here

    applyFilter(reddify);



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


// TODO 2 & 4: Create filter functions

function reddify(array) { 
    array[RED] = 255;
} 
reddify(image);

function decreaseBlue(array) {

}

function increaseGreenByBlue() {

}

// CHALLENGE code goes below here
