if (Meteor.isClient) {

  //Getting words
  Template.zoom.helpers({
    'words': function() {
      return Words.find();
    }
  });



  Template.mainPage.events({
    "click .clickImage": function(event, template) {
      console.log(event.target.name);
      $(event.target).parent().hide(400);
      var imageId = event.target.name;
      Words.insert({
        id: imageId
      });
    }
  });



}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });
}
