var orderApp = angular.module('orderApp', []);

/*
orderApp.controller('orderController', ['$scope', function ($scope) {

    $scope.Adults = 2;

    $scope.Children = 3;

    $scope.Seniors = 1;



}]);
*/


orderApp.controller('orderController', ['$scope', function ($scope) {

    $scope.Tickets = [

        {
            Type: 'Adults',

            Quantity: 0,

            Price: 2


        },

         {
             Type: 'Children',

             Quantity: 0,

             Price: 1


         },

         {
           Type: 'Seniors',

           Quantity: 0,

            Price: 1.25

         }

    ]

    $scope.Total = function () {

        var _total = 0;

        $scope.Tickets.forEach(function (ticket) {

            _total += (ticket.Quantity * ticket.Price);

        });

        return _total;
    }


}]);