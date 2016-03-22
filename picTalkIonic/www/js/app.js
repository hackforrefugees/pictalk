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



.controller('SelectCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate, $window) {
    // No need for testing data anymore
    $scope.items = [{
        id: 12,
        category: "Core",
        english: "People",
        swedish: "Personer",
        arabic: "الناس",
        url: "http://bildstod.se/image/get/7313",
        file: "people.jpg",
        selected: "FALSE",
        selectable: "TRUE"
    }, {
        id: 13,
        category: "Core",
        english: "Know",
        swedish: "Veta",
        arabic: "يعرف",
        url: "http://bildstod.se/image/get/8232",
        file: "know.jpg",
        selected: "FALSE",
        selectable: "TRUE"
    }, {
        id: 14,
        category: "Core",
        english: "With",
        swedish: "Med",
        arabic: "مع",
        url: "http://symbolmanager.ecs.soton.ac.uk/images/ARASAAC/copyof-with.png",
        file: "with.png",
        selected: "FALSE",
        selectable: "TRUE"
    }];
    $scope.allPics = picInJson;
    $scope.currentCategory = "Core";
    $scope.pics = picInJson;
    $scope.coreArray = []
    $scope.healthArray = []
    $scope.feelingsArray = []



    $scope.initializeArray = function() {
        for (var a = 0; a < $scope.allPics.length; a++) {
            var currentPic = $scope.allPics[a];
            if (currentPic.category == "Core")
                $scope.coreArray.push(currentPic)
            else if (currentPic.category == "Health")
                $scope.healthArray.push(currentPic)
            else if (currentPic.category == "Feelings")
                $scope.feelingsArray.push(currentPic)
        }
    }

    // Load Message Modal  ------------------------------------------- 
    // Create and load the Message Modal
    $ionicModal.fromTemplateUrl('message.html', function(modal) {
        $scope.picModal = modal;
    }, {
        scope: $scope,
        animation: 'scale-in'
    });

    // Open our new pic modal
    $scope.openMessage = function() {
        $scope.picModal.show();
    };

    // Close the new pic modal
    $scope.closeMessage = function() {
        $scope.picModal.hide();
    };

    // delete the message
    $scope.deleteMessage = function() {
        $scope.items = [];
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
        native: 'swedish',
        trans: 'arabic'
    }

    $scope.picOnHold = function(event) {
        console.log("picOnHold"+ event.target)

        // $(event.target).addClass('justinB');
    }

    $scope.picOnTouch = function(event) {
     console.log("picOnTouch")
      var element = event.target;
     angular.element(element).addClass('picFeedBack');
    }

     $scope.picOnDrag = function(event) {
        console.log("picOnDrag")
        var element = event.target;
        angular.element(element).removeClass('picFeedBack');
    }

     $scope.picOnSwipe = function() {
        console.log("picOnSwipe")
    }


    $scope.picOnTap = function(tappedPic) {
        console.log("picOnTap")

        tappedPic.selected = true;
        $scope.items.push(
            tappedPic
        );

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

    //Designed for iOS
    $scope.slideHeight;

    $scope.calculateSize = function() {

        var isIOS = ionic.Platform.isIOS();
        var height = $window.innerHeight;

        if (isIOS) {
            $scope.slideHeight = height - 108
        } else {
            $scope.slideHeight = 460
        }
    }

    var onLoadPage = function() {

        $scope.initializeArray()
        $scope.calculateSize()




    };

    onLoadPage();

    // copying ion-list


    // List Toggles
    $scope.editBtnText = 'Edit';
    $scope.toggleDelete = function() {
        $scope.isDeletingItems = !$scope.isDeletingItems;
        $scope.isReorderingItems = false;
        $scope.editBtnText = ($scope.isDeletingItems ? 'Done' : 'Edit');
    };
    $scope.reorderBtnText = 'Reorder';
    $scope.toggleReorder = function() {
        $scope.isReorderingItems = !$scope.isReorderingItems;
        $scope.isDeletingItems = false;
        $scope.reorderBtnText = ($scope.isReorderingItems ? 'Done' : 'Reorder');
    };


    $scope.itemClick = function() {
        console.info('itemClick');
        document.getElementById('click-notify').style.display = 'block';
        setTimeout(function() {
            document.getElementById('click-notify').style.display = 'none';
        }, 500);
    };

    // Item Methods/Properties
    $scope.deleteItem = function(item, index) {
        console.log('onDelete from the "item" directive on-delete attribute. Lets not delete this item today ok!', item, index);
    };
    $scope.deleteListItem = function(item, index) {
        console.log('onDelete from the "list" on-delete attribute', item, index);
        $scope.items.splice(index, 1);

    };


    $scope.moveItem = function(item, fromIndex, toIndex) {
        //Move the item in the array
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0, item);
    };

    $scope.optionButtons1 = [{
        text: 'Edit',
        onTap: function(item, button) { alert(button.text + ' Button: ' + item.text) }
    }, {
        text: 'Share',
        type: 'button-balanced',
        onTap: function(item, button) { alert(button.text + ' Button: ' + item.text) }
    }];

    $scope.optionButtons2 = [{
        text: 'Cancel',
        onTap: function() { alert('CANCEL!') }
    }, {
        text: 'Submit',
        onTap: function() { alert('SUBMIT!') }
    }];


    //Play with slide box

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };


    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };



})