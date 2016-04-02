// This is the script for changing user password html text boxes are included pls make sure txt box id is the same - jaden banson
// just call the function : changePassword() no param. 
//we can also let text box type for passwords === password
/*please include this for html:
  <head>
    <script type="application/javascript"></script>
   <script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
*/
function changePassword(){
	if(oldpsw === newpsw){
	var email = document.getElementById("#emailInput").value;
	var oldpsw = document.getElementById("#oldpasswordInput").value;
	var newpsw = document.getElementById("#newpasswordInput").value;

	var ref = new Firebase("https://torrid-inferno-5946.firebaseio.com/");
	ref.changePassword({
  		email: document.getElementById("#emailInput").value,
  		oldPassword: document.getElementById("#oldpasswordInput").value,
  		newPassword: document.getElementById("#newpasswordInput").value
	}, function(error) {
 	 	if (error) {
    		switch (error.code) {
      			case "INVALID_PASSWORD":
        			alert("The specified user account password is incorrect.");
        			break;
      			case "INVALID_USER":
        			alert("The specified user account does not exist.");
        			break;
      			default:
        			alert("Error changing password:", error);
    		}
  		} else {
			ref.authWithPassword({
  				email: document.getElementById("#emailInput").value,
  				password: document.getElementById("#newpasswordInput").value,
			}, function(error, authData) {
  			if (error) {
    			switch (error.code) {
      				case "INVALID_EMAIL":
        				alert("Internal Server issue regarding Email.");
        				break;
      				case "INVALID_PASSWORD":
        				alert("Internal Server issue regarding Password");
        				break;
      				case "INVALID_USER":
        				alert("Internal Server issue regarding UserData");
        				break;
      				default:
        				alert("Error logging user in:", error);
    			}
  		} else {
			var accref = ref.child("users");
			accref = accref.child(authData.uid.toString())
			accref.update({password: newpsw});
			alert("Password Successfully Changed");
  		}
		});
  	}
 });
	};
	 if (oldpsw != newpsw) {
		alert("Old Password and New Password are not the same..");
		
	}
};