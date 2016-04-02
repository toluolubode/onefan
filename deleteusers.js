// use the same text box for both occurences of email and password - jaden banson

//prototyped in node.js
//change email and password to textbox values
// those default feilds are just for testing
// just call function deleteuser() no param for this code 

/*please include this for html:
  <head>
    <script type="application/javascript"></script>
   <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
*/
function deleteuser(){
var ref = new Firebase("https://torrid-inferno-5946.firebaseio.com/users");
var logref = new Firebase("https://torrid-inferno-5946.firebaseio.com/logged_in");
ref.authWithPassword({
  email: "jaden.banson@yahoo.com",
  password: "1234"
}, function(error, authData) {
  if (error) {
    switch (error.code) {
      case "INVALID_EMAIL":
       alert("The specified user account email is invalid.");
        break;
      case "INVALID_PASSWORD":
        alert("The specified user account password is incorrect.");
        break;
      case "INVALID_USER":
        alert("The specified user account does not exist.");
        break;
      default:
        alert("Error logging user in:", error);
    }
  } else {
    ref = ref.child(authData.uid.toString());
    ref.remove();
    logref = logref.child(authData.uid.toString());
    logref.remove();

ref.removeUser({
  email: "jaden.banson@yahoo.com",
  password: "1234"
}, function(error) {
  if (error) {
    switch (error.code) {
      case "INVALID_USER":
        alert("The specified user account does not exist.");
        break;
      case "INVALID_PASSWORD":
        alert("The specified user account password is incorrect.");
        break;
      default:
        alert("Error removing user:", error);
    }
  } else {
    alert("User account deleted successfully!");
        function decrement_usercount() {
       var cref = new Firebase("https://torrid-inferno-5946.firebaseio.com/users");
        
        cref.once("value", function(snapshot) {
        var intval = snapshot.numChildren();
        cref.parent().child("usercount").update({users: intval});
		cref.parent().child("logged_user_count").update({usercount: intval-1});
        
    });
    }
  setTimeout(decrement_usercount(),3000);
  }
});
  }
});
}