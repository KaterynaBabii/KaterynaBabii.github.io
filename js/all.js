
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

myApp.controller("contactController", function ($scope) {
    // $scope.location = "Lviv, Interesting str, 8";
    // $scope.location = {"address":"Shyroka 1", "city":"Lviv", "province":"Ukraine",},
    // $scope.phone = +380970000000;
    // $scope.email = "email@gmail.com";
    // $scope.busHours = "from 8a.m to 8p.m";
    $scope.contactInfo = [
        {
            "location" : {"description":"Адрес", "city":"Львів", "street":"вул. Центральна 12а", },
            "phones": {"description":"Телефони", "phone1":"+38 (097) 865-72-18", "phone2":"+38 (097) 865-72-18", },
            "contacts": {"description":"Контакти", "email":"email@gmail.com", "skype":"skype", },
            "works": {"description": "Works hours", "workDay": "Понеділок-Пятниця: 9.00-18.00", "weekend": "Субота: 11.00-15.00", "dayoff":"",},
        }, ];
});



// angular.module('myApp', ['uiGmapgoogle-maps'])
//     .controller('mainCtrl', function($scope) {
//         $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
//     });
    
//  myApp.controller('mainCtrl', ['$scope', function($scope, uiGmapGoogleMapApi) {
//   $scope.message = "Success!!!";
// }]);
myApp.controller("homeController", function ($scope, $http) {
    $http({
        method: "GET",
        url: "data.json",
    }).then(function mySucces (response) {
        $scope.items = response.data;
    }, function myError (response) {
        console.log(response.status);
        console.log(response.statusText);
        $scope.items = "Something went wrong";
    });
    $scope.message = "Види послуг";
});


