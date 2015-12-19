Words = new Mongo.Collection("words");

//Routing
// Router.configure({
//   layoutTemplate: 'layout'
// });
Router.route('/', {
  template: 'index'
});
Router.route('/home');
Router.route('/mainPage');
Router.route('/words');


if (Meteor.isClient) {

  Template.body.helpers({
    words: function() {
      return Words.find();
    }
  });

  Template.body.events({
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
