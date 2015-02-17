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







