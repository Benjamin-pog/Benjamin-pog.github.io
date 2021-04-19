// Using arrow keys so I need a frame timer - stolen from pong

$(document).ready(runProgram);

function runProgram(){

    var FRAME_RATE = 60;
    var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

    // Every frame do this ---

    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);
    $(document).on('keydown', handleKeyDown);
    $(document).on('keyup', handleKeyUp);

    function newFrame() {

    }

    //Honestly gotta figure this out

    function handleEvent(event) {

    }

    function endGame() {

    // stop the interval timer

    clearInterval(interval);

    // turn off event handlers

    $(document).off();
    }

    //Controls

    var key = {
    'UP': 87,
    'DOWN': 83,
    'LEFT': 37,
    'RIGHT': 39,
    'ONE': 49,
    'TWO': 50,
    'THREE': 51,
    'FOUR': 52
    };

    //Factory Functions for charcters

    function POKETRAINER($id) {
        var choose = {};
        choose.id = $id;
        choose.name = name;
        choose.words = words;
        return choose;
    }

    var steven = POKETRAINER('#Steven');
    var anna = POKETRAINER('#Anna');
    var joel = POKETRAINER('#Joel');
    var ben = POKETRAINER('#Ben');

    //Factory Function for PokePets

    function POKEPET($id) {
        var choose2 = {};
        choose2.id = $id;
        choose2.name = name;
        choose2.look = look;
        choose2.move1 = "";
        choose2.move2 = "";
        choose2.move3 = "";
        choose2.move4 = "";
        return choose2;
    }

    var marley = POKEPET('#Marley');
    var willow = POKEPET('#Willow');
    var rotzie = POKEPET('#Rotzie');
    var duke = POKEPET('#Duke');
    var carl = POKEPET('#Carl');

    //Maybe make array or something to define each moves damage

    var attacks = [Bark, Whine, DeadHorse, ShitOnBensCarpet, MewMew, BeAnOverallMenance, Bite, Scratch, SleepOnTom, DestroyAnna, TakeDownTheMonarchy, AggressivelyLick, Roll, Squeek, RoundHouseKick, ProtectBabies, NuggleNuggle, AnkleSwipe, Headbutt, Quack];

    attacks[0] = 0;
    attacks[1] = 0;
    atacks[2] = 1;
    attacks[3] = 5;
    attacks[4] = 1;
    attacks[5] = 5;
    attacks[6] = 2;
    attacks[7] = 3;
    attacks[8] = 0;
    attacks[9] = 2;
    attacks[10] = 3;
    attacks[11] = 1;
    attacks[12] = 3;
    attacks[13] = 1;
    attacks[14] = 5;
    attacks[15] = 2;
    attacks[16] = 1;
    attacks[17] = 3;
    attacks[18] = 2;
    attacks[19] = 5;

    //If function to assign moves to PokePet

    if (POKEPET($id) === '#Marley') {
        choose2.move1 = Bark;
        choose2.move2 = Whine;
        choose2.move3 = DeadHorse;
        choose2.move4 = ShitOnBensCarpet;
    } if (POKEPET($id) === '#Willow') {
        choose2.move1 = MewMew;
        choose2.move2 = BeAnOverallMenace;
        choose2.move3 = Bite;
        choose2.move4 = Scratch;
    } if (POKEPET($id) === '#Rotzie') {
        choose2.move1 = SleepOnTom;
        choose2.move2 = DestroyAnna;
        choose2.move3 = TakeDownTheMonarchy;
        choose2.move4 = AggressivelyLick;
    } if (POKEPET($id) === '#Duke') {
        choose2.move1 = Roll;
        choose2.move2 = Squeek;
        choose2.move3 = RoundHouseKick;
        choose2.move4 = ProtectBabies;
    } if (POKEPET($id) === '#Carl') {
        choose2.move1 = NuggleNuggle;
        choose2.move2 = AnkleSwipe;
        choose2.move3 = Headbutt;
        choose2.move4 = Quack;

    //Need to split screen into 2 parts for charcter + PokePet Selection
    //Need to split screen into 4 parts for fighting scene
    //Need to design boards
    /* ------------- MAKE BUTTONS AND MAKE THEM CHOOSE CHARACTER----------*/
    //Design Buttons - place them in necessary spots
}
























}
