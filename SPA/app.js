// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

//SERVICES
myApp.service('myService',['$log', function($log) {
    
    var self = this;
    self.name = 'John Doe';
    self.greeting = function() {
        $log.info('Hello. I am ' + self.name);
        return 'Hello. I am ' + self.name;
    }
    
}]);


//CONFIR ROUTES
myApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
    })
    
    .when('/second/', {
        templateUrl: 'views/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'views/second.html',
        controller: 'secondController'
    })
    
}]);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', '$routeParams', 'myService', function($scope, $log, $routeParams, myService) {
    
    $scope.name = 'Main';
    $scope.person = myService.name;
    
    $scope.$watch('person', function() {
        myService.name = $scope.person;
    });
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams','myService', function($scope, $log, $routeParams, myService) {
    
    $scope.name = 'Second';
    $scope.num = $routeParams.num;
    $scope.person = myService.name;
        
    $scope.$watch('person', function() {
        myService.name = $scope.person;
    });
}])