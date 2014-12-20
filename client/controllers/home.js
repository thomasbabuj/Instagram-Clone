
angular.module('Instagram')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {
    $scope.isAuthenticated = function() {
      // Check if logged in
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      // connect email account with Instagram
      $auth.link('instagram')
      	.then(function(response) {
      		$window.localStorage.currentUser = JSON.stringify(response.data.user);
      		$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
      	});
    };
  })
