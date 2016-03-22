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

weatherApp.controller('cityController',['$scope', 'cityService', 'weatherService', '$routeParams','$resource', '$http', '$rootScope', function($scope, cityService, weatherService, $routeParams,$resource,$http,$rootScope) { 
    
    var api = 'http://pokeapi.co/api/v1/pokemon/';
    
    $scope.limit = 12;
    $scope.offset = $scope.limit;
    $scope.total;
    
    
    $http.get('http://pokeapi.co/api/v1/pokemon/', {
        params: {
            limit: $scope.limit
        }
    }).success(function(data){
        $scope.total = data.meta.total_count;
        $scope.pokemons = data.objects;
    });
    
    
    $scope.loadMore = function() {
        $http.get('http://pokeapi.co/api/v1/pokemon/', {
            params: {
                limit: $scope.limit,
                offset: $scope.offset
            }
        }).success(function(data){
            var newPokemons = data.objects;
            $scope.pokemons = $scope.pokemons.concat(newPokemons);
            $scope.offset += $scope.limit;
        });
    }
}]);

weatherApp.filter('convertToCel', function() {
    return function(input) {
        return Math.round(input-273.15);
    }
});

