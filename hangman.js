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
    var list = ["HOUSE", "COMPUTER", "MOUSE", "RHETORIC"];

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
    var position = word.indexOf(guess);
    
    if (position !== -1) {
        $('div > #' + position).html(guess);
        $('button[value=' + guess + ']').prop('disabled', 'disabled');
        console.log(position);
    } else {
        if ($('#guesses').html().indexOf(guess) === -1) {
            $('button[value=' + guess + ']').prop('disabled', 'disabled');
            $('#guesses').append(guess);
        }
    }
};