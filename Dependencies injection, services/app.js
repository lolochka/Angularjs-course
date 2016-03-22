// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', function($scope, $log, $filter, $resource, $timeout) {
//DEPENDENCY INJECTION
    
    $scope.name = 'Olga';
    $scope.surname = 'Shkoda';
    $scope.getFullName = function() {
        return this.name + ' ' + this.surname;
    }
    console.log($scope.getFullName());
    
//USING $log
    
    $scope.name = 'John';
    $scope.formName = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formName);
   

//WATCHERS

    $scope.$watch('handle', function(newValue, oldValue) {
        
        $log.info('Changed!');
        $log.log('Old: ' + oldValue);
        $log.log('New: ' + newValue);
        
    });
    
    setTimeout(function() {
        
        $scope.$apply(function(){
            $scope.handle = 'QARea';
            $log.info('Scope changed');
            $log.log($scope.handle);
        })
    }, 3000);
    
    $timeout(function() {
        $scope.handle = 'TESTFORT';
        $log.info('Scope changed');
        $log.log($scope.handle);
    }, 6000);

    $scope.name = 'Olga';
    
    $timeout(function() {
        
        $scope.name = 'Everybody';
        
    }, 3000);

    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }

    
}]);