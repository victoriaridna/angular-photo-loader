'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'app.controllers']);
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });
    $routeProvider.when('/', {
        templateUrl: '../templates/startPageTemplate',
        controller: 'mainController'
    })
        .when('/search', {
            templateUrl: '../templates/photoDataTemplate',
            controller: 'photoDataController'
        })
        .otherwise({
            redirectTo: '/',
            }
        );
}]);
