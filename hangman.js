var word = "BUTT";

$(document).ready(function() {
    generateButtons();
    
    $('#letters button').click(function() {
        var guess = $(this).attr('value');
        
        guessLetter(guess);
    });
});

function generateButtons() {
    var snippet = "";
    
    for (var i = 0; i < 26; i++) {
        snippet += '<button type="button" class="btn btn-default" value="' + String.fromCharCode(65 + i) + '">' + String.fromCharCode(65 + i) + '</button>'
    }
    
    $('#letters').html(snippet);
};

function guessLetter(guess) {
    if (word.indexOf(guess) !== -1) {
        console.log(true);
    } else {
        
    }
};