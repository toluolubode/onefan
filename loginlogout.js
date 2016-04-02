//just call login() or logout() function names are self explanatory 
// use the same text box for both fucntions even though both functions are not dependant on each other - jaden banson
// we can also change the console.log()'s to modals or other pop-ups
//prototyped in node.js
//change email and password to textbox values
// those default feilds are just for testing


/*please include this for html:
  <head>
    <script type="application/javascript"></script>
   <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
*/

function login(){
var mydata = new Object();
var logged;
var ref = new Firebase("https://torrid-inferno-5946.firebaseio.com/users");
ref.authWithPassword({
  email    : "jaden.banson@yahoo.com",
  password : "1234"
}, function(error, authData) { 
	if(error){
		sweetAlert("Error creating user:", error);
	}
	else{
	alert("logged in!");

	var mydataurl = ref.child(authData.uid.toString());
	mydataurl.update({logged_in: true});
	logged = true;
	mydataurl.once('value', function(dataSnapshot) {
		var dataraw = dataSnapshot.val();
		mydata = dataraw
		
		if(logged === true){
				var loggeduser = ref.parent().child("logged_in");
				var loggedusercount;
				var loggeduser_data = loggeduser.child(mydata.udid.toString());
			    loggeduser_data.set(mydata);

				loggeduser.once("value", function(snapshot) {
				  var int = snapshot.numChildren();
		
				  loggedusercount = loggeduser.parent().child("logged_user_count");
				  loggedusercount.set({usercount: int})
				  
				});	
			}	 
              function getIP(json) {
                    loggeduser_data.update({ip_address:json.ip});
                     mydataurl.update({ip_address:json.ip});
              }
	});
	};
	}, {
  remember: "sessionOnly"
});
}
function logout() {

var logoutref = new Firebase("https://torrid-inferno-5946.firebaseio.com/logged_in");

logoutref.authWithPassword({
  email    : "jaden.banson@yahoo.com",
  password : "1234"
}, function(error, authData) {
  if (error) {
    alert("Login Failed!", error);
  } else {
	alert("logged out!");
	var outref = logoutref.child(authData.uid.toString());

	outref.update({logged_in: false}); 
	
	  outref.once("value", function(snapshot) {
	    var data = snapshot.val();
	    if(data.logged_in === false){
			outref.unauth();
			outref.remove();
			
			logoutref.once("value", function(snapshot) {
			  var int = snapshot.numChildren();
			  var outcount;
			  outcount = logoutref.parent().child("logged_user_count");
			  outcount.update({usercount: int})
			  
			});
        }	    
	  });
  }
});
};

login();
