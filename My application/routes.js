//MODULE
var weatherApp = angular.module('weatherApp', ['ngResource', 'ngRoute']);

//ROUTERS
weatherApp.config(['$routeProvider',function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'views/forecast.html',
        controller: 'cityController'
    })
    
    .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'cityController'
    });
    
}]);

weatherApp.factory('HttpInterceptor', ['$rootScope', '$q', '$timeout', function ($rootScope, $q, $timeout) {

    return {
        'request': function (config) {

            $rootScope.isLoading = true;    // loading after 200ms

            return config || $q.when(config);   
        },
        'requestError': function (rejection) {
            /*...*/
            return $q.reject(rejection);
        },
        'response': function (response) {       

            $rootScope.isLoading = false;       // done loading

            return response || $q.when(response);
        },
        'responseError': function (rejection) {
            /*...*/
            return $q.reject(rejection);
        }
    };
}]);

weatherApp.config(['$httpProvider',function($httpProvider){
    $httpProvider.interceptors.push('HttpInterceptor');
    console.log($httpProvider.interceptors);
}]);