// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('picTalk', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})



.controller('SelectCtrl', function($scope, $ionicModal) {
    // No need for testing data anymore
    $scope.messages = [];
    $scope.allPics = picInJson;
    $scope.currentCategory = "Core";
    $scope.pics = picInJson;

    // Load Message Modal  ------------------------------------------- 
    // Create and load the Message Modal
    $ionicModal.fromTemplateUrl('message.html', function(modal) {
        $scope.picModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

     // Open our new pic modal
    $scope.openMessage = function() {
        $scope.picModal.show();
    };

    // Close the new pic modal
    $scope.closeMessage = function() {
        $scope.picModal.hide();
    };

    // Set Language  ------------------------------------------- 
    // Create and load the Language selection Modal
    $ionicModal.fromTemplateUrl('language.html', function(modal) {
        $scope.langModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });


    // Open our new pic modal
    $scope.openLangSel = function() {
        $scope.langModal.show();
    };

    // Close the new pic modal
    $scope.closeLangSel = function() {
        $scope.langModal.hide();
    };

    $scope.language = {
      native : 'swedish',
      trans  : 'arabic'
    }
    




    $scope.deletePicInMessage = function(index) {
        console.log("------");
        $scope.messages.splice(index, 1);
    };


    $scope.picOnTap = function(tappedPic) {
        console.log($scope.picTouched);
        //console.log("yoyo" + tappedPic.id);
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
        $scope.selectCategory("Health")
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
