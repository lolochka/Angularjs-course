// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', '$http', function($scope, $log, $filter, $resource, $timeout, $http) {
    
    $http.get('/api')
        .success(function (result) {
            $scope.data = result;
        })
        
        .error(function (data, status) {
            console.log(data);
        });
    
    $scope.newRule = '';
    
    $scope.addRule = function () {
        
        $http.post('/api', { newRule: $scope.newRule })
            
            .success(function (result) {
                $scope.rules = result;
                $scope.newRule = '';
            })
        
            .error(function(data, status) {
                console.log(data);
            });          
    }
    
}]);