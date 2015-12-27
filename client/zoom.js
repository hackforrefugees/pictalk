Template.zoom.helpers({
  images: function() {
    return Images.find();
  },
  isSelected: function(category) {
    return this.selected;
  }
});


Template.zoom.events({
  "click .createNew": function(event, template) {
    // Words.remove({});
    console.log("should be deleted");
    console.log(Images.find({
      selected: true
    }).fetch());
  }

});
