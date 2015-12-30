Template.zoom.helpers({
  images: function() {
    return Images.find({}, {
      sort: {
        "addedToMsg": 1
      }
    });
  },
  isSelected: function(category) {
    return this.selected;
  }
});


Template.zoom.events({
  "click .createNew": function(event, template) {
    Meteor.call('createNew');
  }

});
