'use strict';

var app = angular.module('app.controllers.main', ['app.controllers.data']);

app.controller('mainController', function ($location, $scope, $routeParams ) {

    $scope.$on('setQuery', function (event,query) {
        $scope.searchQuery = query.toString()
    });

    $scope.setHide = function () {
        $scope.hideFooter = true;
    };

    $scope.limit = 10;

    $scope.limitReset = function () {
        $scope.limit = 10;
    };
});