// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', function($scope, $log) {
//DEPENDENCY INJECTION
    
//    $scope.name = 'Olga';
//    $scope.surname = 'Shkoda';
//    $scope.getFullName = function() {
//        return this.name + ' ' + this.surname;
//    }
//    console.log($scope.getFullName());
    console.log($scope);
    console.log($log);
    console.log($log.error);
    

});