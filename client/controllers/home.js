/* Home Controller */

angular.module('Instagram')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth){

    $scope.isAuthenticated = function() {
      // Check if user logged in
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      // Connect email account with Instagram
      $auth.link('instagram')
        .then(function(response) {
          $window.localStorage.currentUser  = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        });
    };

  });
