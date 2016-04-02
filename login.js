/*turns password back to text */
function mouseoverPass(regpass) {
  var regpass = document.getElementById('regpass');
  regpass.type = "text";
}
function mouseoutPass(regpass) {
  var regpass = document.getElementById('regpass');
  regpass.type = "password";
}
function mouseoverPass1(reregpass) {
  var regpass = document.getElementById('reregpass');
  regpass.type = "text";
}
function mouseoutPass1(reregpass) {
  var regpass = document.getElementById('reregpass');
  regpass.type = "password";
}
$(function() {
    $("#reregpass").keyup(function() {
        var password = $("#regpass").val();
        $("#passwordcheck").html(password == $(this).val() ? "Passwords are a match, Come on in!" : "Houston! You wanna check that?");
    });

});