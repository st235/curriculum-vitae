var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60
});

subjectInput = document.getElementById("subject");
emailInput = document.getElementById("email");
messageInput = document.getElementById("message");
sendButton = document.getElementById("submitButton");

sendButton.addEventListener("click", function(e) {
    e.preventDefault();

    var http = new XMLHttpRequest();
    var url = "https://cv-mailer.herokuapp.com/email/send";
    var params = "subject=" + subjectInput.value + "&from=" + emailInput.value + "&body=" + messageInput.value;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }

    http.send(params);
    console.log("sended", params);
});

console.log($("#me-nav"));
$("#me-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#me").offset().top},
        'slow');
});

$("#projects-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
});

$("#contact-nav").click(function() {
    $('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
});