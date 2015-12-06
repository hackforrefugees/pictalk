Categories = new Mongo.Collection("categories");
Files = new Mongo.Collection("images");

if (Meteor.isClient) {

  var images = [
    {text: "1", img: "images/1-to go.png"},
    {text: "2", img: "images/2-sadface.png"},
    {text: "3", img: "images/3-to complete.png"},
    {text: "4", img: "images/4-to want copycolored balls.png"},
    {text: "5", img: "images/5-No in color.png"}
  ];
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
  Router.route('/categories/:_id', function() {

    Meteor.subscribe("files");
    var categoryId = "";
    categories.forEach(function(category, index) {
      if (obj.id == this.params._id) {
        categoryId = category["Swedish"];
      }
    });
    var imgs = Files.find({"Kategori": categoryId});
    $.each(imgs, function(idx, image) {
			Blaze.renderWithData(Template.images, image, parentNode);
		});
    // Meteor.call('getFiles', this.params._id, function(err, response) {
    //   images = response;
    //   $.each(images, function(idx, image) {
		// 		Blaze.renderWithData(Template.images, image, parentNode);
		// 	});
    // });
  });

  Template.categories.rendered = function() {
    var parentNode = $(this.lastNode).find(".content .row")[0];
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
    files.forEach(function (file, index, array) {
        Files.insert(file);
    });

    var categories = JSON.parse(Assets.getText("categories.json"));
    categories.forEach(function (category, index, array) {
        Categories.insert(category);
    });

    Meteor.methods({
      getFiles: function(category) {
        var categoryId = "";
        categories.forEach(function(obj, index) {
          if (obj.id == category) {
            categoryId = obj["Swedish"];
          }
        });
        Meteor.publish("files", function() {
          return Files.find({"Kategori": categoryId});
        });
      },
      getCategories: function() {
        return categories;
      }
    });
    // code to run on server at startup
  });
}
