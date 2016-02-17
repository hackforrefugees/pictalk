angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('menu.picTalk', {
      url: '/homePage',
      views: {
        'side-menu21': {
          templateUrl: 'templates/picTalk.html',
          controller: 'picTalkCtrl'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('languages', {
      url: '/languages',
      templateUrl: 'templates/languages.html',
      controller: 'languagesCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/homePage');

});