Files = new Mongo.Collection("images");

if (Meteor.isClient) {

  var images = [{
    text: "1",
    img: "images/1-to go.png"
  }, {
    text: "2",
    img: "images/2-sadface.png"
  }, {
    text: "3",
    img: "images/3-to complete.png"
  }, {
    text: "4",
    img: "images/4-to want copycolored balls.png"
  }, {
    text: "5",
    img: "images/5-No in color.png"
  }];
  var categories = [];


  Router.configure({
    layoutTemplate: 'layout'
  });

  Router.route('/', function() {
    this.render('ion');
  });
  Router.route('/categories', function() {
    this.render('categories');
  });
  Router.route('/setup', function() {
    this.render('setup');
  });
  Router.route('/zoom', function() {
    this.render('zoom');
  });
  Router.route('/categories/:_id', function() {
    Meteor.call('getFiles', this.params._id, function(err, response) {

    });
  });

  Template.categories.helpers({
    allCategories: categories
  });

  Template.images.helpers({
    allImages: images
  });

  Template.categories.rendered = function() {
    var parentNode = $(this.lastNode).find(".content .row")[1];
    Meteor.call('getCategories', function(err, response) {
      categories = response;
      $.each(categories, function(idx, category) {
        Blaze.renderWithData(Template.category, category, parentNode);
      });
    });
  }



}

if (Meteor.isServer) {
  Meteor.startup(function() {

    var files = JSON.parse(Assets.getText("komHit.json"));
    Files.insert(files);

    var categories = JSON.parse(Assets.getText("categories.json"));

    Meteor.methods({
      getFiles: function(category) {
        var cat = categories[category].Swedish;
        return Files.find({
          Kategori: cat
        });
      },
      getCategories: function() {
        return categories;
      }
    });
    // code to run on server at startup
  });
}
