var word;

$(document).ready(function() {
    init();
    
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
    // Get the position of the guess letter in the word, or -1 if not found
    var position = getPosition(guess);
    console.log(position);
    
    if (position.length === 1) {
        // Reveal the guessed letter
        $('div > #' + position).html(guess);
        
        // Disable button
        $('button[value=' + guess + ']').prop('disabled', 'disabled');
    } else if (position.length > 1) {
        for (var i = 0; i< position.length; i++) {
            // Reveal the guessed letter
            $('div > #' + position[i]).html(guess);
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
};

function getPosition(letter) {
    var indices = [];
    
    for (var i = 0; i < word.length; i++) {
        if (letter === word.charAt(i)) {
            indices.push(i);
        }
    }
    
    return indices;
};