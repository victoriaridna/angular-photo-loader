'use strict';
var app = angular.module('app.controllers.data', []);


app.controller('photoDataController', function ($scope, $location, $http) {


        //taking search parameter from url
        var search = $location.search().query;

        //looking for changes in input
        $scope.$watch('searchQuery', function (newValue) {

            //setting new query parameter in url
            $location.search('query', newValue);

            //if new query parameter is undefined go to start page
            if (!newValue) {
                $scope.reloadFunc();
            }

            //getting data from unsplash
            return $http.get('https://api.unsplash.com/search/photos?client_id=' + $scope.clientId + '&query=' + search)
                .then(function (response) {
                        //throw data to the scope
                        $scope.photos = response.data.results;
                    }
                );
        });


        //button more function: increading limit of displayed photos
        $scope.getMore = function (event) {
            $scope.limit += 2;
            //disabling btn if limit equals 10
            if ($scope.limit === 10) {
                var btn = event.target;
                btn.innerHTML = 'That\'s all';
                btn.disabled = true;
                btn.style.color = '#000';
                btn.style.border = 'none';
            }
        };

    }
)
;
