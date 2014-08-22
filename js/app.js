// Generate a Backbone.js, Ember.js, AND/or Spine.js app that allows a
//  user to create, edit, update, and destroy (delete) users. *  
// Users should have first name, last name, and email address fields. 
// First name is required. Email should be a valid email. 
// If you breezed through this challenge, add extra features 
// to this app (be creative) and tell us what you did so we don’t 
// miss it. Please deploy this app live somewhere (e.g. a free Heroku 
// 	account) so we can interact with it (be sure to enter the URL here).


var app = app || {};


$(function() {
	$( '#releaseDate' ).datepicker();
	new app.LibraryView();
});