'use strict';
var app = angular.module('app.controllers.data', []);


app.controller('photoDataController', function ($scope, $location, $http, $routeParams) {

        $scope.setHide();

        var clientId = '39f1966a283cb51f38e7371c5e0ee9f785eb5e4bedf4b22c8a93be4aeb57d13e';

        var search = $routeParams.query;
        var page = 1;

        $scope.$emit('setQuery', $routeParams.query);

        $scope.photos = [];
        $scope.$on('$viewContentLoaded', getData);

        function getData() {
            return $http.get('https://api.unsplash.com/search/photos?client_id=' + clientId + '&query=' + search + '&page=' + page)
                .then(function (response) {
                        $scope.loadScroll = false;
                        $scope.photos = $scope.photos.concat(Array.from(response.data.results));
                    }
                );
        }

        $scope.loadScroll = false;

        $scope.loadMore = function () {
            $scope.limit += 5;
            if ($scope.limit % 10 === 0) {
                $scope.loadScroll = true;
                ++page;
                getData()
            }
        }
    }
);
