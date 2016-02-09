var stringCore = "Core";
Session.setDefault("selectedCategory", "");
//var selectedCategory = "Feelings";


Template.mainPage.helpers({
  categoryButtons: [{
    name: "Daily life",
    color: "red"
  }, {
    name: "Feelings",
    color: "orange"
  }, {
    name: "Health",
    color: "teal"
  }, {
    name: "Food",
    color: "green"
  }, {
    name: "Shopping",
    color: "yellow"
  }, {
    name: "Transportation",
    color: "pink"
  }],

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
    console.log("prepare to return objCore");
    return objCore;
  }
});


Template.mainPage.events({
  "click .category": function(event, template) {
    var btnCategory = event.target.title;
    // Control affordance
    if (event.target.clicked !== true) {
      event.target.clicked = true;
    } else {
      event.target.clicked = false;
    }
    // Tell meteor what category is selected
    Session.set('selectedCategory', btnCategory);

  },

  "click .clickImage": function(event, template) {
    //
    var imageId = this._id;
    Images.update(imageId, {
      $set: {
        selected: true,
        addedToMsg: new Date()
      }
    });

    $(event.target).parent().hide(400);

  }
});
