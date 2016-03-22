//CONTROLLER
weatherApp.controller('mainController',['$scope', 'cityService', '$location', function($scope, cityService, $location) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })
    
    $scope.submit = function() {
        $location.path("/forecast");
    }
    
}]);

weatherApp.controller('cityController',['$scope', 'cityService', 'weatherService', '$routeParams', function($scope, cityService, weatherService, $routeParams) {
    
    $scope.city = cityService.city;
    console.log($routeParams.days);
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
    console.log($scope.weatherResult);
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    
}]);

weatherApp.filter('convertToCel', function() {
    return function(input) {
        return Math.round(input-273.15);
    }
});

