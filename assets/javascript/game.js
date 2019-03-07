$(document).ready(function() {

    function initializeGame() {
        // Create random target number between 19 - 120
        var computerPick = Math.floor(Math.random() * 101) + 19;
        console.log("computerPick");

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
            var image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
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
    }
    initializeGame();



});