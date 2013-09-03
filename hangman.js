var word;
var completed = 0;

$(document).ready(function() {
    init();
    
    $('#start').click(function() {
        // Hide the start button
        $('#start').css('display', 'none');
        
        // Show the other elements
        $('#word').css('display', 'inline');
        $('#letterbank').css('display', 'inline');
    });
    
    $('#newGame').click(function() {
        init();
        
        $('#newGame').css('display', 'none');
        
        // Show the other elements
        $('#word').css('display', 'inline');
        $('#guessed').css('display', 'inline');
        $('#letterbank').css('display', 'inline');
    });
    
    $('#letterbank button').click(function() {
        var guess = $(this).attr('value');

        guessLetter(guess);
    });
});

function init() {
    word = generateWord();
    console.log(word);
    
    generateButtons();
    generateBlanks();
};

// Generates buttons A-Z for use in guessing
function generateButtons() {
    var snippet = "";
    
    for (var i = 0; i < 26; i++) {
        snippet += '<button type="button" class="btn btn-default" value="' + String.fromCharCode(65 + i) + '">' + String.fromCharCode(65 + i) + '</button>'
    }
    
    $('#letterbank').html(snippet);
};

function generateWord() {
    var list = ["HOUSE", "COMPUTER", "MOUSE", "RHETORIC", "HERRING"];

    return list[Math.floor(Math.random() * list.length)];
};

// Takes the given word and generates blanks for that word
function generateBlanks() {
    var snippet = "";
    
    for (var i = 0; i < word.length; i++) {
        snippet += '<div class="word" id="' + i + '">' + '_' + '</div><div class="word"> </div>';
    }
    
    $('#word').html(snippet);
};

// Guess a letter
function guessLetter(guess) {
    // Get the position of the guess letter in the word
    var position = getPosition(guess);
    
    if (position.length === 1) {
        // Reveal the guessed letter
        $('div > #' + position).html(guess);
        completed += 1;
        
        // Disable button
        $('button[value=' + guess + ']').prop('disabled', 'disabled');
    } else if (position.length > 1) {
        for (var i = 0; i< position.length; i++) {
            // Reveal the guessed letter
            $('div > #' + position[i]).html(guess);
            completed += 1;
        }
        
        // Disable button
        $('button[value=' + guess + ']').prop('disabled', 'disabled');
    } else {
        // If the letter has not already been guessed
        if ($('#guessed').html().indexOf(guess) === -1) {
            // Disable button
            $('button[value=' + guess + ']').prop('disabled', 'disabled');
            
            // Add letter to guessed list
            $('#guessed').append(guess);
        }
    }
    
    if (checkWon()) {
        // New Game
        init();
    }
};

// Find all occurrences of a given letter in the word
function getPosition(letter) {
    var indices = [];
    
    for (var i = 0; i < word.length; i++) {
        if (letter === word.charAt(i)) {
            indices.push(i);
        }
    }
    
    return indices;
};

// Check if the player has won
function checkWon() {
    if (completed === word.length) {
        console.log("Winner!");
        alert('You win!');
        
        return true;
        /*$('#newGame').html('<button type="button" class="btn btn-lg btn-primary">New Game</button>').css('display', 'inline');
        
        // Hide the other elements
        $('#word').css('display', 'none');
        $('#guessed').css('display', 'none');
        $('#letterbank').css('display', 'none');*/
    }
    
    return false;
};