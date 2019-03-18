'use strict';
var app = angular.module('app.controllers.data', []);


app.controller('photoDataController', function ($scope, $location, $http, $routeParams, $route) {

        $scope.setHide();

        var clientId = '39f1966a283cb51f38e7371c5e0ee9f785eb5e4bedf4b22c8a93be4aeb57d13e';

        var search = $routeParams.query;

        var page = $routeParams.page;

        console.log($scope.pageCounter);


        $scope.$watch('$routeParams', function () {

            return $http.get('https://api.unsplash.com/search/photos?client_id=' + clientId + '&query=' + search + '&page=' + page)
                .then(function (response) {
                        $scope.photos = response.data.results;
                    }
                );
        });


        $scope.getMore = function (event) {
            $scope.limit += 2;
            if ($scope.limit % 10 === 0) {
                var newPage = ++$routeParams.page;
                $route.updateParams({page: newPage.toString()});
                $scope.limit += 2;

                // var btn = event.target;
                // btn.innerHTML = 'That\'s all';
                // btn.disabled = true;
                // btn.style.color = '#000';
                // btn.style.border = 'none';
            }
        };

    }
)
;
