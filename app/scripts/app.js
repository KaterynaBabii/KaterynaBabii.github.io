
var myApp = angular.module("myApp", ["ngRoute", ]);

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

// angular.module('app').config(function ($routeProvider) {
//   var site_prefix = '/firefly';
//   $routeProvider.
//   when(site_prefix + '/', {
//     controller: HomeCtrl,
//     templateUrl: 'partials/home.html'
//   }).
//   when(site_prefix + '/serenity', {
//     controller: SerenityCtrl,
//     templateUrl: 'partials/serenity.html'
//   });
// });
