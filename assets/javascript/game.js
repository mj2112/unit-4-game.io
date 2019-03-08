$(document).ready(function() {
    var numWins = 0;
    var numLosses = 0;
    var playerScore = 0;
    var computerPick;
    var gameOver = false;

    function initializeGame() {
        playerScore = 0;

        // Create random target number between 19 - 120
        computerPick = Math.floor(Math.random() * 101) + 19;
        console.log("computerPick is: " + computerPick);

        // Create 4 new random numbers between 1 - 12 to fill crystalValues array
        var crystalValues = [];

        for (var i = 0; i < 4; i++) {
            var randomCrystalVal = Math.floor(Math.random() * 12) + 1;
            crystalValues.push(randomCrystalVal);
            console.log(randomCrystalVal);
            console.log(crystalValues);
        }
        console.log(crystalValues);
        // Create the four crystal images and assign values from crystalValues array
        for (var i = 0; i < crystalValues.length; i++) {
            // Array of src links to the four drystal images
            var image = ["assets/images/crystal-clipart-emerald-494286-1423411.jpg",
                "assets/images/crystal-clipart-turquoise-gem-494327-6845513.jpg",
                "assets/images/crystal-clipart-gemstone-494285-2178960.jpg",
                "assets/images/crystal-clipart-emerald-494286-2209598.png"
            ];

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystal-image");

            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", image[i]);

            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            imageCrystal.attr("data-crystalvalue", crystalValues[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
            console.log(imageCrystal.val());
        }
        $("#targetNum").text(computerPick);
        //$("#playerTotal").text(playerScore);
        return computerPick;
    }
    initializeGame();

    $(".crystal-image").on('click', function() {
        if (gameOver) {
            $("#crystals").empty();
            initializeGame();
            return;
        } else {
            var crystalValue = $(this).attr("data-crystalvalue");
            console.log("The value of this crystal is: " + crystalValue);
            var score = playerScore += parseInt(crystalValue);
            console.log("Player score is: " + playerScore);
            playGame(score);
        }
    });

    function playGame(score) {
        console.log("Score is: " + score);
        console.log(typeof score);
        console.log(typeof computerPick);
        $("#playerTotal").html(score);
        if (score > computerPick) {
            var over = score - computerPick;
            $("#playerTotal").text("You went over by " + over + "! You lose!");
            numLosses++;
            $("#playerLosses").text("Losses: " + numLosses);
            gameOver = true;
            return;
        }
        if (score === computerPick) {
            $("#playerTotal").text("You win!");
            numWins++;
            $("#playerWins").text("Wins: " + numWins);
            gameOver = true;
            return;
        }
        if (score < computerPick) {
            return;
        }

    };










});