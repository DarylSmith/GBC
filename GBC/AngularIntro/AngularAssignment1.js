var orderApp = angular.module('orderApp', []);


orderApp.controller('orderController', ['$scope', function ($scope) {

    $scope.Nights = 1;

    $scope.Properties = [

        {
            Type: 'Cabin',

            QuantityChild: 0,

            QuantityAdult: 0,

            PriceChild: 12,

            PriceAdult: 20


        },

         {
             Type: 'Trailer',

             QuantityChild: 0,

             QuantityAdult: 0,

             PriceChild: 10,

             PriceAdult: 15



         },

         {
             Type: 'Tent',


             QuantityChild: 0,

             QuantityAdult: 0,

             PriceChild: 2.50,

             PriceAdult: 5


         }

    ]

    $scope.Total = function () {

        var _total = 0;

        $scope.Properties.forEach(function (property) {

            _total += ((property.PriceChild * property.QuantityChild) + (property.QuantityAdult * property.PriceAdult) * $scope.Nights);

        });

        return _total;
    }


}]);