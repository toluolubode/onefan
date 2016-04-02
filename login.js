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
function cacheIntrest(){
function login(){

var mydata;
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
	sweetAlert("logged in!",success);

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

   function updateStruct(type,content,intrest){
        var intref = new Firebase("https://torrid-inferno-5946.firebaseio.com/users");
        
        this.type = type;
        this.content = content;
        this.intrest = intrest;
        
        
        intref = intref.child(authData.uid.toString());
        intref = intref.child("content");
        intref = intref.child(this.type.toString());
        intref = intref.child(this.content.toString());
        
        intref.update({intrest: this.intrest});
        
    }
    //@games
    new updateStruct("games","batmanarkhamknight",document.getElementById("batmanarkhamknight_slider").value);
    new updateStruct("games","watchdogs",document.getElementById("watchdogs_slider").value);
    new updateStruct("games","fallout4",document.getElementById("fallout4_slider").value);
    new updateStruct("games","bloodborne",document.getElementById("bloodborne_slider").value);
    //@music
    new updateStruct("music","acdc",document.getElementById("acdc_slider").value);
    new updateStruct("music","drake",document.getElementById("drake_slider").value);
    new updateStruct("music","kendricklamar",document.getElementById("kendricklamar_slider").value);
    new updateStruct("music","taylorswift",document.getElementById("taylorswift_slider").value);
    //@tvshows
    new updateStruct("tv_shows","americanhorrorstory",document.getElementById("americanhorrorstory_slider").value);
    new updateStruct("tv_shows","arrow",document.getElementById("arrow_slider").value);
    new updateStruct("tv_shows","bojackhorseman",document.getElementById("bojackhorseman_slider").value);
    new updateStruct("tv_shows","daredevil",document.getElementById("daredevil_slider").value);
    new updateStruct("tv_shows","gameofthrones",document.getElementById("gameofthrones_slider").value);
    new updateStruct("tv_shows","gotham",document.getElementById("gotham_slider").value);
    new updateStruct("tv_shows","houseofcards",document.getElementById("houseofcards_slider").value);
    new updateStruct("tv_shows","narcos",document.getElementById("narcos_slider").value);
    new updateStruct("tv_shows","newgirl",document.getElementById("newgirl_slider").value);
    new updateStruct("tv_shows","orangeisthenewblack",document.getElementById("orangeisthenewblack_slider").value);
    new updateStruct("tv_shows","scream",document.getElementById("scream_slider").value);
    new updateStruct("tv_shows","suits",document.getElementById("suits_slider").value);
    new updateStruct("tv_shows","supernatural",document.getElementById("supernatural_slider").value);
    new updateStruct("tv_shows","truedetective",document.getElementById("truedetective_slider").value);
    new updateStruct("tv_shows","walkingdead",document.getElementById("walkingdead_slider").value);
    
    sweetAlert("Prefrences Updated", "Nice, Your Content Fanlevel's were updated!", "success");
    
    
    
  
	});
	};
	}, {
  remember: "sessionOnly"
});
login();

}