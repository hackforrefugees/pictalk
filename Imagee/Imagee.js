

if (Meteor.isClient) {

  var images;

  Meteor.call('getFiles', function(err,response) {
    images = response;
  });

  Router.configure({
      layoutTemplate: 'layout'
  });

  Router.route('/', function () {
    this.render('ion');
  });
  Router.route('/categories', function () {
    this.render('categories');
  });

  Template.categories.helpers({
    allCategories: images
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    var files = JSON.parse(Assets.getText("komHit.json"));

    Meteor.methods({
  	  getFiles: function () {
  		  return files;
      }
    });
    // code to run on server at startup
  });
}
