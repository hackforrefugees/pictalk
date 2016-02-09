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
    'createNew': function() {
      console.log("createNew called");
      // var selectedQuery = Images.find({
      //   "selected": true
      // });
      // console.log(selectedQuery);

      Images.update({
        selected: true
      }, {
        $set: {
          selected: false
        }
      }, {
        multi: true
      });
    }
  });
}
