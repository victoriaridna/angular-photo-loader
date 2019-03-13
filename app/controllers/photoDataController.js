var app = angular.module('app.controllers.data', [])
    .controller('photoDataController', function ($scope, $http) {

            const clientId = '39f1966a283cb51f38e7371c5e0ee9f785eb5e4bedf4b22c8a93be4aeb57d13e';
            $scope.searchQuery = '';


            $scope.$watch('searchQuery', function () {
                    $http.get('https://api.unsplash.com/search/photos?client_id=' + clientId + '&query=' + $scope.searchQuery)
                        .then(response => $scope.photos = response.data.results)
                }
            );


            $scope.getMore = () => {
                $http.get('https://api.unsplash.com/search/photos?client_id=' + clientId + '&query=' + $scope.searchQuery)
                    .then(response => $scope.newPhotos = response.data.results)
            }
        }
    );