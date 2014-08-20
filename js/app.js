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
    var books = [
        { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
        { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
        { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
        { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
        { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
    ];

    new app.LibraryView( books );
});