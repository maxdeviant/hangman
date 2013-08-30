var word = "COMPUTER";

$(document).ready(function() {
    generateButtons();
    generateWord();
    
    $('#letterbank button').click(function() {
        var guess = $(this).attr('value');
        
        guessLetter(guess);
    });
});

function generateButtons() {
    var snippet = "";
    
    for (var i = 0; i < 26; i++) {
        snippet += '<button type="button" class="btn btn-default" value="' + String.fromCharCode(65 + i) + '">' + String.fromCharCode(65 + i) + '</button>'
    }
    
    $('#letterbank').html(snippet);
};

function generateWord() {
    var snippet = "";
    
    for (var i = 0; i < word.length; i++) {
        snippet += '<div class="word" id="' + i + '">' + '_' + '</div><div class="word"> </div>';
    }
    
    $('#word').html(snippet);
};

function guessLetter(guess) {
    var position = word.indexOf(guess);
    
    if (position !== -1) {
        $('div > #' + position).html(guess);
        console.log(position);
    } else {
        if ($('#guesses').html().indexOf(guess) === -1) {
            $('#guesses').append(guess);
        }
    }
};