
var myApp = angular.module("myApp", ["ngRoute",]);

myApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/home", {
            templateUrl: "../views/home.html",
            controller: "homeController",
        }).
        when("/about", {
            templateUrl: "../views/about.html",
            controller: "SuccessController",
        }).
        when("/portfolio", {
            templateUrl: "../views/portfolio.html",
            controller: "homeController",
        }).
        when("/contacts", {
            templateUrl: "../views/contacts.html",
            controller: "contactController",
        }).
        otherwise({
            redirectTo: "/home",
        });
},

]);
myApp.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});