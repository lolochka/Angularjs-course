// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', function($scope, $log, $filter, $resource, $timeout) {

    $scope.alertClick = function() {
        alert("Clicked!");
    };
    
    $scope.name = 'Ng-cloak hide element from user why interpolation finished';
}]);