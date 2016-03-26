// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('pickADate', function($scope, $ionicPopup) {

  function getString() {
  $scope.data = {};
  $scope.getDate = function () {
    console.log('whatevs');
      var myPopup = $ionicPopup.show({
          template: '<input type="text" ng-model="data.codeclub">',
          title: 'When is the next CodeClub?',
          scope: $scope,
          buttons: [
              { text: 'Cancel' },
              {
                  text: 'Submit',
                  type: 'button-positive'
                  // onTap: function(e) {
                  //   console.log(e);
                  //   if(!$scope.data.movie) {
                  //     e.preventDefault();
                  //   } else {
                  //     console.log($scope.data);
                  //     return $scope.data.movie;
                  //   }
                  // }
              }
          ]
      });
    }
  }
  // function pickNerdyDate ($scope, $ionicPopup) {
  //   console.log('hey is this ever even called?');
  //   var popup = $ionicPopup.show({
  //     template: '<p></p>',
  //     title: 'When is the next Nerdy Girl\'s CodeClub? (Please input date as "April 4, 2016")',
  //     scope: $scope,
  //     buttons: [
  //       { text: 'Cancel' },
  //       {
  //         text: 'Submit',
  //         type: 'button-positive'
  //         // onTap: function(e) {
  //         //   console.log(e);
  //         //   if(true) {
  //         //     e.preventDefault();
  //         //   } else {
  //         //     console.log($scope.data);
  //         //     return;
  //         //   }
  //         // }
  //       }
  //     ]
  //   });
  // };
});
