//this code can inject an object into every child or "user" in the database 
//we can use this for future updates when adding new feautures - Jaden Banson

var arr = new Array();
var ref = new Firebase("https://torrid-inferno-5946.firebaseio.com/users");
ref.once("value", function(snapshot) {
  
  snapshot.forEach(function(childSnapshot) {

    var key = childSnapshot.key();


    
    var childData = childSnapshot.val();
    var stc = ref.child(key.toString())
    arr.push(stc.toString());
    
  });
for(var i = 0; i < arr.length; i++){
 var temc = new Firebase(arr[i].toString());
 temc.update({content:{
	tv_shows:{
		arrow: {
			rating: "8.0",
			year: "2012 - ",
			bio: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
			creators: " Greg Berlanti, Andrew Kreisberg, Marc Guggenheim",
			stars: " Stephen Amell, Katie Cassidy, David Ramsey",
			airs: "Every Wednsday | at 8:00 ET/PT  | on CTV",
			scheduel: "http://www.ctv.ca/Arrow/Episode-Guide.aspx"
		}
	}
}});
}
});