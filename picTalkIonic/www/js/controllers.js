angular.module('app.controllers', [])

.controller('picTalkCtrl', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.messages = [];

  $scope.allPics = picInJson;
  $scope.currentCategory = "Core";
  $scope.pics = picInJson;
  $scope.nativeLang = "english";
  $scope.transLang = "arabic";

  // Create and load the Modal new-pic.html
  $ionicModal.fromTemplateUrl('/templates/message.html', function(modal) {
    $scope.picModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createPic = function(pic) {
    $scope.pics.push({
      title: pic.title
    });
    $scope.picModal.hide();
    pic.title = "";
  };

  // Open our new pic modal
  $scope.newPic = function() {
    $scope.picModal.show();
  };

  // Close the new pic modal
  $scope.closeMessage = function() {
    $scope.picModal.hide();
  };


  $scope.deletePicInMessage = function(index) {
    console.log("------");
    $scope.messages.splice(index, 1);
  };


  $scope.picOnTap = function(tappedPic) {
    tappedPic.selected = true;
    $scope.messages.push(
      tappedPic
    );
    console.log($scope.messages);
  };

  $scope.picOnTouch = function() {
    console.log("touched");
  };

  $scope.onSwipeRight = function() {
    console.log("onSwipeRight");
    $scope.selectCategory("Health");
  };


  $scope.selectLang = function() {
    console.log("//Selecting a language");
  };

  $scope.selectCategory = function(selectedCategory) {
    console.log(selectedCategory);
    var currentPics = [];
    $scope.currentCategory = selectedCategory;
    for (var a = 0; a < $scope.allPics.length; a++) {
      if ($scope.allPics[a].category == $scope.currentCategory)
        currentPics.push($scope.allPics[a]);
    }
    $scope.pics = currentPics;
  };

  var onLoadPage = function() {
    console.log("onLoadPage");
  };

  onLoadPage();

})


.controller('languagesCtrl', function($scope) {

});
