Categories = new Mongo.Collection("categories");
Files = new Mongo.Collection("images");

if (Meteor.isClient) {


  var images = [
    {category: "health", text: "1", img: "images/1-to go.png"},
    {category: "food", text: "2", img: "images/2-sadface.png"},
    {category: "shopping", text: "3", img: "images/3-to complete.png"},
    {category: "transportation", text: "4", img: "images/4-to want copycolored balls.png"},
    {category: "dailylife", text: "5", img: "images/5-No in color.png"},
    {category: "dailylife", text: "5", img: "images/3-to complete.png"},
    {category: "dailylife", text: "5", img: "images/2-sadface.png"}
  ];
  // var categories = [];


  Meteor.subscribe("allimages");
  Meteor.subscribe("allcategories");

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
    //var self = this;
    // var categoryId = "";
    // Categories.find().fetch().forEach(function(obj, index) {
    //   if (obj.id == self.params._id) {
    //     categoryId = obj["Swedish"];
    //   }
    // });

    //var ehj = Files.find({"Kategori": categoryId});
    var hej;

    for (var i = 0; i < images.length; i++) {
      Blaze.renderWithData(Template.image, images[i], $(".images"));
    };

  });

  Template.categories.rendered = function() {

    // var parentNode = $(this.lastNode).find(".content .row")[1];
    // Categories.find().fetch().forEach(function(idx, category) {
		// 	Blaze.renderWithData(Template.category, category, parentNode);
		// });

  }



}

if (Meteor.isServer) {
  Meteor.startup(function() {

    // if (Files.find().count() != 0) {
    //   var files = JSON.parse(Assets.getText("komHit.json"));
    //   files.forEach(function (file, index, array) {
    //       Files.insert(file);
    //   });
    // }
    // if (Categories.find().count() != 0) {
    //   var categories = JSON.parse(Assets.getText("categories.json"));
    //   categories.forEach(function (category, index, array) {
    //       Categories.insert(category);
    //   });
    // }


    Meteor.publish("allimages", function() {
      return Files.find({});
    });
    Meteor.publish("allcategories", function() {
      return Categories.find({});
    });




    Meteor.methods({

    });
    // code to run on server at startup
  });
}
