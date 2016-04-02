module.exports = {
	var app = angular.module("onefan", ["firebase"]);

	var Firebase = require("firebase");
	var ref =  new Firebase("https://torrid-inferno-5946.firebaseio.com")
	ref.createUser({
	 email    : "toluwanimioluobde@gmail.com",
	 password : "gotislife"
	}, function(error, userData) {
	if (error) {
	console.log("Error creating user:", error);
		} else {
	console.log("Successfully created user account with uid:", userData.uid);
	}
	});
	ref.authWithPassword({
	  email    : "toluwanimioluobde@gmail.com",
	  password : "gotislife"
	}, function(error, authData) {
	  if (error) {
	    console.log("Oops we got a problem", error);
	  } else {
	    console.log("Welcome back!", authData);
	  }
	});
};