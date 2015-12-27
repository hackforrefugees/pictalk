Words = new Mongo.Collection("words");
Images = new Mongo.Collection("images");

if (Meteor.isClient) {



  Template.image.helpers({
    catIs: function(category) {
      return this.category === category;
    },
    isSelectable: function() {
      return this.selectable;
    }
  });



}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });

  Meteor.methods({
    'limiteSelectableToCore': function() {
      Images.update({
        category: {
          $ne: "Core"
        }
      }, {
        selectable: false
      });
    }
  });
}
