'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'infinite-scroll', 'app.controllers']);
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });

    $routeProvider.when('/', {
        templateUrl: 'templates/startPageTemplate.html',
        controller: 'mainController'
    })
        .when('/search', {
            templateUrl:'templates/photoDataTemplate.html',
            controller: 'photoDataController'
        })
        .otherwise({
                redirectTo: '/',
            }
        );
}]);
