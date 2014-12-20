angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config( function($routeProvider, $authProvider) {

      $routeProvider
        .when('/', {
          templateUrl : 'views/home.html',
          controller : 'HomeCtrl'
        })
        .when('/login', {
          templateUrl : 'views/login.html',
          controller : 'LoginCtrl',
        })
        .when('/signup', {
          templateUrl : 'views/signup.html',
          controller : 'SignupCtrl'
        })
        .when('photo/:id', {
          templateUrl : 'views/detail.html',
          controller : 'DetailCtrl'
        })
        .otherwise('/');

        $authProvider.loginUrl = 'http://localhost:8000/server/auth/instagram',
        $authProvider.signupUrl = 'http://localhost:8000/server/auth/signup';
        $authProvider.oauth2 ({
          name : 'instagram',
          url : 'http://localhost:8000/server/auth/instagram',
          redirectUri : 'http://localhost:8000',
          clientId : '2fcebd8d60e24a3098777f36d325c654',
          requiredUrlParams : ['scope'],
          scope : ['likes'],
          scopeDelimiter: '+',
          authorizationEndpoint : 'https://api.instagram.com/oauth/authorize'
        });
  });
