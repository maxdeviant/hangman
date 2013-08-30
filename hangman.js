$(document).ready(function() {
    generateButtons();
    
    $('#letters button').click(function() {
        console.log($(this).attr('value'));
    });
});

function generateButtons() {
    var snippet = "";
    
    for (var i = 0; i < 26; i++) {
        snippet += '<button type="button" class="btn btn-default" value="' + String.fromCharCode(65 + i) + '">' + String.fromCharCode(65 + i) + '</button>'
    }
    
    $('#letters').html(snippet);
}