var stringCore = "Core";
Session.setDefault("selectedCategory", "");
//var selectedCategory = "Feelings";

Template.mainPage.helpers({
  images: function() {
    var categorySecondary = Session.get('selectedCategory');
    console.log("categorySecondary is:" + categorySecondary);
    console.log("B");
    var objCore = Images.find({
      category: {
        $in: ["Core", categorySecondary]
      }
    }, {
      sort: {
        "_id": -1
      }
    });

    console.log(objCore);
    return objCore;
  }
});


Template.mainPage.events({
  "click .category": function(event, template) {
    var btnCategory = event.target.title;
    console.log("btnCategory is :" + btnCategory);
    //selectedCategory = btnCategory;
    Session.set('selectedCategory', btnCategory);
    console.log("selectedCategory is:" + Session.get('selectedCategory'));
  },

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
