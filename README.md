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

    ng-submit is very similiar to $('form').submit in jquery

    For displaying error messages under the form fields we are going to use ng-messages directive introduced in AngularJS 1.3.

    In ng-message server-error attribute is a directive while ng-message="server" is a custom validtor for ng-messages.

    instagramLogin() and emailLogin() returns a promise, that's why we use .then and .catch to handle
    success and error responses.

    Under the hood $auth.authenticate() opens a popup window pointing to authorizationEndpoint with dynamically constructed query parameters based on the default configuration object.

    Satellizer uses explicit grant type, so we need to have a back-end for authentication as well.

    The major diffference between two grant types ( implicit and explicit) that actually matters to us 
    is that one grant type can be done purely on the client and another grant cannot.

    With explicit grant type, when the user authorize the app, instagram will issue you a short lived authorization code, that you may exchange for an access_token on the server. This cant be done just on the client-side alone. You can then use that access_token to query for user's profile info or perform certain actions on behalf of that user.

    With implicit grant type,  Instagram will issue an access_token right away, instead of an authorization code. That means you can do user authentication entirely on the client-side similar to Facebook and Google's JS SDK.

    The downside of using implicit approach is that when you obtain user's profile and decide to save that user in your database how can you be sure that the profile info and access token they are sending to you is valid ? for this we need to verify it first.

    once the $auth.authenticate() returns, it will have a response object from the server which contains JSON Web Token (JWT) and a user object.

    This unique JWT token is generated on the server specifically for this user

    Its better to send userobject alongside JWT token, not inside it and then stores it in the local storage.

    Satellizer will pass along the original response object from the server In other words, if you send a JSON object with token and user from the server, we could get user back via response.data.user inside .then() of authenticate() and login() methods.

8) Singup Form

    Satellizer’s $auth.signup() method just takes an object and sends it to the server without doing anything to it. 

    If you wish to use /register endpoint instead of /auth/signup you can easily override the signup URL:
    $authProvider.signupUrl = ‘/register';

    by default Satellizer will automatically sign you in after a successful registration.

    If you do not like this behavior you can turn it off like so:
    $authProvider.loginOnSignup = false;

    if you disable automatic sign in, Satellizer will simply redirect a user to the /login route specified in $authProvider.loginRoute. If for some reason you have to do something else before redirect to login page you can disable this behavior by setting$authProvider.loginRoute to null.

9) Authentication Middleware and JWT

    has two methods that are of interest to us: encode() and decode(). 

    An object that gets encoded and decoded is called JWT Claims, others may also refer to it as payload. 

    you could even include the entire user object as part of JWT Claims, 

    The reserved sub claim on line 5 is used to store user’s unique ID

    








