/* AngularJS entry point */

angular.module('Instagram', ['ngRoute', 'ngMessages','satellizer'])
  .config(function($routeProvider, $authProvider) {

    $routeProvider
      .when('/', {
         templateUrl : 'views/home.html',
         controller :  'HomeCtrl'
      })
      .when('/login', {
        templateUrl : 'views/login.html',
        controller : 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl : 'views/signup.html',
        controller : 'SignupCtrl'
      })
      .when('photo/:id', {
        templateUrl : 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise('/');

      $authProvider.loginUrl = 'http://localhost:3000/auth/login';
      $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
      $authProvider.oauth2({
        name : 'instagram',
        url  : 'http://localhost:8000',
        clientId : '2fcebd8d60e24a3098777f36d325c654',
        requiredUrlParams : ['scope'],
        scope: ['likes'],
        scopeDelimiter : '+',
        authorizationEndpoint : 'https://api.instagram.com/oauth/authorize'
      });
  });
