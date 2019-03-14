'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'app.controllers'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled:true,
            requireBase: false
        });
    }])
;

