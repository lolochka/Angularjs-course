// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'views/second.html',
        controller: 'secondController'
    })
    
}]);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
    $scope.name = 'Main';
    
    
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
    $scope.name = 'Second';
    
}])