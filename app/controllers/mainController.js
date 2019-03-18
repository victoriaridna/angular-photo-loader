'use strict';

var app = angular.module('app.controllers.main', ['app.controllers.data']);

app.controller('mainController', function ($location, $scope) {

    $scope.setHide = function () {
        $scope.hideFooter = true;
    };

    $scope.limit = 4;

    $scope.limitReset = function () {
        $scope.limit = 4;
        $scope.pageCounter = 1;
    };
});