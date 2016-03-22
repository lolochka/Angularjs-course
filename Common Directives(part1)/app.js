// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', function($scope, $log, $filter, $resource, $timeout) {


    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.characters = 5;
    
    $scope.rules = [
        {
            rule: "Must be 5 characters"
        },
        {
            rule: "Must be unique"
        },
        {
            rule: "Must be simple"
        },
        
    ]
    
    
}]);