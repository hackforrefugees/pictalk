angular.module('app.controllers', [])

.controller('picTalkCtrl', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.messages = [{
    id: 1,
    category: "Core",
    english: "I",
    swedish: "Jag",
    arabic: "انا",
    url: "http://bildstod.se/image/get/7048",
    file: "i.jpg",
    selected: "FALSE",
    selectable: "TRUE"
  }, {
    id: 1,
    category: "Core",
    english: "I",
    swedish: "Jag",
    arabic: "انا",
    url: "http://bildstod.se/image/get/7048",
    file: "i.jpg",
    selected: "FALSE",
    selectable: "TRUE"
  }];



  $scope.data = {
    test: 'vddal'
  };



  $scope.allPics = picInJson;
  $scope.currentCategory = "Core";
  $scope.pics =
    picInJson;
  $scope.nativeLang = "english";
  $scope.transLang = "arabic";



  // Create and load the Modal

  // $ionicModal.fromTemplateUrl('modal.html', {
  //   scope: $scope,
  //   animation: 'slide-in-up'
  // }).then(function(modal) {
  //   $scope.picModal = modal;
  // });



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
    console.log("$scope.messages is" + $scope.messages);
    $scope.data.messages.push(
      tappedPic
    );
    console.log("$scope.data.messages is" + $scope.data.messages);
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



.controller('AppSubCtrl', function($scope) {})



.controller('languagesCtrl', function($scope) {

})

.controller('ModalCtrl', function($scope) {

});
