Template.mainPage.helpers({
  images: function() {
    //console.log(test1);
    return Images.find();
  }
});


Template.mainPage.events({
  "click .clickImage": function(event, template) {
    //console.log(event.target.name);
    var imageId = this._id;
    console.log("the imageId is " + imageId);
    Meteor.call('limiteSelectableToCore');

    Session.set('selectedImage', imageId);
    var selectedImage = Session.get('selectedImage');
    Images.update(selectedImage, {
      $set: {
        selected: true
      }
    });



    $(event.target).parent().hide(400);
    //var imageName = event.target.name;
    Words.insert({
      File: imageId
    });


  }
});
