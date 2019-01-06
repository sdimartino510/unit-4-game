$(document).ready(function() {

    //random number should be 19-120
    //each crystal random between 1-12

    //pseudocode

    //Randomly generate a number between 19 and 120 and assign it to random-number-box

    var minRandNumber = 19;
    var maxRandNumber = 120;
    var randomNumber = randomNumberRange(minRandNumber, maxRandNumber);
    // var minCrystalValue = 1;
    // var maxCrystalValue = 12;
    // var randomCrystalValue = randomCrystalValueRange(minCrystalValue, maxCrystalValue);

    function randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(randomNumber);

    $(".random-number-box").append(randomNumber);

    //Randomly generate a number between 1 and 12 and assign it to each crystal. No two crystals may have the same number assigned.

    function getRandomNumber() {
        return Math.floor(Math.random() * 12) + 1;
    }

    $(".crystal").each(function() { 
        $(this).attr("data-random-value", getRandomNumber());
    })
    

    //When player clicks on a crystal, assign the score assigned to that crystal to total-score-box. Add that crystal's value to the amount in total-score-box each time it is clicked.

    //compare the score in total-score-box to the number in random-number-box. if total score < random number, play continues. If total score = random number, player wins. if total score > random number, player loses. When player wins or loses, reset game

    function resetGame() {

    }

    //If player wins, add 1 to the wins class. If player loses, add 1 to the losses class
    
    
});