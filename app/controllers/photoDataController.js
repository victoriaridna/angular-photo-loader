var app = angular.module('app.controllers.data', []);


app.controller('photoDataController', ($scope, $location, $http, $window) => {
        const clientId = '39f1966a283cb51f38e7371c5e0ee9f785eb5e4bedf4b22c8a93be4aeb57d13e';
        let id = $location.search().search;

        $window.onload = () => {
            if (id !== 'undefined') {
                $http.get('https://api.unsplash.com/search/photos?client_id=' + clientId + '&query=' + id)
                    .then(response => $scope.photos = response.data.results)
            }
        };

        $scope.find = () => {
            $http.get('https://api.unsplash.com/search/photos?client_id=' + clientId + '&query=' + $scope.searchQuery)
                .then(response => $scope.photos = response.data.results)
        };


        $scope.limit = 4;

        $scope.getMore = (event) => {
            $scope.limit += 2;
            if ($scope.limit === 10) {
                let btn = event.target;
                btn.innerHTML = 'That\'s all';
                btn.disabled = true;
                btn.style.color = '#000';
                btn.style.border = 'none';
            }
        };

        $scope.limitReset = () => {
            $scope.limit = 4
        }
    }
)
;
