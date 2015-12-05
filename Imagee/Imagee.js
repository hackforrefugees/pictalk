
Images = new FS.Collection("public/images", {
  stores: [new FS.Store.FileSystem("public/images", {path: "~/uploads"})]
});

if (Meteor.isClient) {

  var images = [
    {text: "1", img: "images/1-to go.png"},
    {text: "2", img: "images/2-sadface.png"},
    {text: "3", img: "images/3-to complete.png"},
    {text: "4", img: "images/4-to want copycolored balls.png"},
    {text: "5", img: "images/5-No in color.png"},
  ];

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

    // code to run on server at startup
  });
}
