$(document).ready(function() {

    //random number should be 19-120
    //each crystal random between 1-12

    //pseudocode

    var randomNumber;
    var won = 0;
    var lost = 0;
    var currentScore = 0;

    //Randomly generate a number between 19 and 120 and assign it to random-number-box

    var minRandNumber = 19;
    var maxRandNumber = 120;
    var randomNumber = randomNumberRange(minRandNumber, maxRandNumber);

    function randomNumberRange(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
        
    }

    console.log(randomNumber);

    $(".random-number-box").append(randomNumber);

    //Randomly generate a number between 1 and 12 and assign it to each crystal. No two crystals may have the same number assigned.

    function startGame() {

        function getRandomNumber() {

            return Math.floor(Math.random() * 12) + 1;

        }

        $(".crystal").each(function() {

            $(this).attr("data-random-value", getRandomNumber());

        })
    
    }

    startGame();

    //When player clicks on a crystal, assign the score assigned to that crystal to total-score-box. Add that crystal's value to the amount in total-score-box each time it is clicked.

    $(document).on("click", ".crystal", function() {

        var num = parseInt($(this).attr("data-random-value"));
        currentScore += num;
        console.log(currentScore);
        $(".total-score-box").html(currentScore);

        if (currentScore > randomNumber) {
            console.log("You lost!");
            lost++;
            $(".losses").html("Losses: " + lost);
            startGame();

        } else if (currentScore === randomNumber) {
            console.log("You won!");
            won++;
            $(".wins").html("Wins: " + won);
            startGame();

        }

    })

    //compare the score in total-score-box to the number in random-number-box. if total score < random number, play continues. If total score = random number, player wins. if total score > random number, player loses. When player wins or loses, reset game

    // function resetGame() {
    //     randomNumberRange();
    //     getRandomNumber();

    // }

    //If player wins, add 1 to the wins class. If player loses, add 1 to the losses class
    
    
});