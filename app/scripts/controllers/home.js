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


