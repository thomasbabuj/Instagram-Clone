Instagram-Clone
===============

Instagram clone with AngularJS, Satellizer, Node.js and MongoDB

This repo is based on the tutorial created by Sahat Yalkabov.( https://github.com/sahat )

Source :
https://hackhands.com/building-instagram-clone-angularjs-satellizer-nodejs-mongodb/

Development Steps

1) Created Client directory and downloaded AngularJS scripts

      The ng-app attribute is used for bootstrapping an AngularJS application

      The ng-view works alongside ngRoute by including the rendered template of the current route into the main layout

2)  AngularJS app entry point - app.js

      Angular uses modules to organize application code.

      A module can depend on other modules. in our case ngRoute and ngMessages  each module  is like a mini-application with its own poential models, controllers, services, directives, filters, etc.

      The first argument is the name of the module and the second argument is an array of module dependencies. If you do not have any dependencies, an empty array must be provided either way.

      To reference a module in order to create a new controllers, services or directives we will simply use angular.module(‘Instagram’) without the second argument.

     The .config() method above is executed during the provider registration and configuration phase.

     We can only inject providers and constants into configuration blocks, hence the $routeProvider and not $route.

     The module name and the ng-app attribute value in index.html have to match.

3)  Bootstraping UI

4)  Routing

    A template is just a snippet of HTML-like code that gets inserted into the ng-view block

    need to use ng-include if you want to display only on some pages.

    Each .when() method above takes  a relative URL path as its first argument and an object as its second argument.

    .otherwise() will match any path that is not one of the specified routes above. This is where you could also redirect to a 404 page instead of a home page like we have above.

5)  HomePage Template and Ctrl

    This template consists of 3 main parts:

        User is authenticated via Email or OAuth 2.0 and has a valid Instagram username.

        User is not authenticated.

        User is authenticated via Email but does not have a valid Instagram username

    ng-if attribute is a special Angular directive that conditionally renders an HTML block based on some expression. If the expression inside ng-if evaluates to false then the element is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.

    The ng-repeat attribute is another special Angular directive that is essentially a for-each loop designed for Angular templates.

    in Angular the ng-repeat will iterate over the element itself on which it is defined.

    we need to use ng-src attribute on <img> element.

    Don’t forget to prepend href paths with a hash, i.e. #/login instead of /login. That is necessary unless you are using HTML5 History API (pushState).

6)  Adding Satellizer Module

    By default, Satellizer module comes with the following default OAuth providers at the moment of this writing: Google, Facebook, Twitter, LinkedIn, GitHub, Yahoo and Windows Live

    Both loginUrl and signupUrl are server endpoints to handle user login and registration

    Satellizer will send a POST request to these endpoints when we call $auth.login() and $auth.signup() from LoginCtrl and SignupCtrl controllers.

    The url server endpoint is where most of the work will be done. It will handle Instagram account creation, account merging, returning existing account if a user logs in a second time

    The redirectUri where Instagram will redirect to after user successfully authorizes our app to use their profile information, feed and potentially perform actions like commenting on and liking photos on their behalf.

    The scope and scopeDelimiter are used for requesting additional permissions. while scopeDelimter is a separator between multiple scopes.

    the authorizationEndpoint is the URL for the consent screen.

    Injecting services in the Homectrl ( $socpe, $window and $rootScope are builtin AngularJS services.)

7)  Login Page









