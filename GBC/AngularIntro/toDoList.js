//var toDoApp = angular.module('myApp', ['ngRoute']);

//toDoApp.config(['$routeProvider',
//    function ($routeProvider) {
//        $routeProvider.when('/listings',
//            {
//                controller: 'DetailsController',
//                templateUrl: 'Listings.html'

//            }).when('/details/:user',
//            {
//                controller: 'DetailsController',
//                templateUrl: 'Details.html'
//            }).otherwise(
//            { redirectTo: '/listings' }

//            )


//    }]);


//toDoApp.controller('DetailsController', ['$scope','$routeParams', function ($scope,$routeParams) {

//    $scope.toDoItems = [];
//    $scope.user = $routeParams.user;
//    $scope.showReport = false;
//    $scope.toDoItems.push({ id: 0, text: '' });
//    $scope.toDoItems.push({ id: 1, text: '' });


//    $scope.addItem = function () {

//        $scope.toDoItems.push({id: ($scope.toDoItems.length+1),text: '' });

//    };


//    $scope.displayItem = function () {

//        $scope.showReport = true;

//    };



//}]);

var toDoApp = angular.module('myApp', []);



toDoApp.controller('DetailsController', ['$scope', function ($scope) {

    $scope.toDoItems = [];
    $scope.showReport = false;
    $scope.toDoItems.push({ id: 0, text: '' });
    $scope.toDoItems.push({ id: 1, text: '' });


    $scope.addItem = function () {

        $scope.toDoItems.push({ id: ($scope.toDoItems.length + 1), text: '' });

    };


    $scope.displayItem = function () {

        $scope.showReport = true;

    };



}]);