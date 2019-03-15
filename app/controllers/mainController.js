'use strict';

var app = angular.module('app.controllers.main', ['app.controllers.data']);

app.controller('mainController', function ($location, $scope, $window) {

    //client Id for unsplash API
    $scope.clientId = '39f1966a283cb51f38e7371c5e0ee9f785eb5e4bedf4b22c8a93be4aeb57d13e';




    //returning to start page, when searchQuery in input is 'undefined'
    $scope.reloadFunc = function () {
        var host = $window.location.host;
        var homeUrl = '/';
        $window.location.href = homeUrl;
    };



    //limit for the number of displaying photos
    $scope.limit = 4;

    //reset limit
    $scope.limitReset = function () {
        $scope.limit = 4;
    };
});