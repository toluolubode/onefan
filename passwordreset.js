// call password reset funtion - JADEN BANSON
// WE NEED TO DESIGN EMAIL TEMPLATE FOR PASSWORD RESET CSS /HTML
/*please include this for html:
  <head>
    <script type="application/javascript"></script>
   <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
*/

function passwordReset(){
var ref = new Firebase("https://torrid-inferno-5946.firebaseio.com/");
ref.resetPassword({
  email: "jaden.banson@gmail.com"
}, function(error) {
  if (error) {
    switch (error.code) {
      case "INVALID_USER":
        alert("The specified user account does not exist.");
        break;
      default:
        alert("Error resetting password:", error);
    }
  } else {
    alert("Password reset email sent successfully!");
  }
});
}