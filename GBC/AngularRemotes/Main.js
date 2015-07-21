var pivotal = angular.module('pivotalTracker', ['ngRoute']);

pivotal.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/listings',
        {
            controller: 'listingsController',
            templateUrl: 'Listings.html'
        }).when('/Details/:id',{

            controller: 'detailsController',
            templateUrl: 'Details.html'
        })
        .otherwise
        (
        {
            redirectTo: '/listings'
        }
        )

}]);


pivotal.controller('listingsController', ['$scope', '$http', function ($scope, $http) {

    $scope.data = "data";
    //create a request

    $http({
        url: 'http://pivotalservice.com/api/Epic',
        params: { token: 'b0290951629836b8219426a52336c8e5', projectId: 1303714 },
        method: 'GET'
    }).success(function (data, status, headers, config) {
       
        $scope.data = data;

    });




}]);



pivotal.controller('detailsController', ['$scope', '$http','$routeParams', function ($scope, $http,$routeParams) {

    $scope.item = {};
    //create a request

    var id = $routeParams.id;

    $http({
        url: 'http://pivotalservice.com/api/Epic',
        params: { token: 'b0290951629836b8219426a52336c8e5', projectId: 1303714 },
        method: 'GET'
    }).success(function (data, status, headers, config) {

        data.forEach(function (i) {

            if (i.id == id) {

                $scope.item = i;
            }

        });




    });




}]);