// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

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
myApp.controller('mainController', ['$scope', '$log', '$routeParams',  function($scope, $log, $routeParams) { 
    
    $scope.people = [
        {
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York',
            country: 'USA'
        },
        {
            name: 'Jane Doe',
            address: 'Green St',
            city: 'New York',
            country: 'USA'
        },
        {
            name: 'Bill Doe',
            address: 'Lenina St.',
            city: 'Loa Santos',
            country: 'USA'
        }
    ];
                     
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.country;
    }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
}])


//DIRECTIVE
myApp.directive('searchResults', function() {
    return {
        restrict: 'EA',//tyype as Angular acept this Directive. "EA" - default settings
        //E - ellement A - attribute C - class M - comment
        
        templateUrl: 'directives/searchresults.html',
        replace: true,
        scope: {
            personObject: "=",// we use it as person-object="person" {{interpolate and we don't need them}}
            personName: "@",
            personAddress: "@", // @ is text
            formattedAddressFunction: "&" // this is function
        },
        transclude: true,
        
//        compile: function(elem, attrs) {
//            //console.log('Compiling...');
//            //elem.removeAttr('class');//we can change directive on the fly
//            //console.log(elem.html()); // The compile run once and retern post links (where we can change attributes)
//            return {
//                /*pre: function(scope, elements, attrs) {
//                    console.log('Pre-linking');
//                    console.log(elements);
//                },*/
//                
//                post: function(scope, elements, attrs) {//we can change directive with outputed information onthefly
//                    
//                    console.log('Post-linking');
//                    console.log(scope);
//                    
//                    if (scope.personObject.name === "Jane Doe") {
//                        elements.removeAttr('class');
//                    }
//                    console.log(elements);
//                    
//                }
//            }
//            
//        },
        
        link: function(scope, elements, attrs) {//shorthand for linking
            console.log ("Linking");
            if (scope.personObject.name === "Bill Doe") {
                elements.css("background-color", "#1abc9c");
            }
        }
    }
    
});

myApp.directive('resize', function ($window) {
  return function (scope, element, attr) {

    var w = angular.element($window);
    scope.$watch(function () {
      return {
        'h': window.innerHeight,
        'w': window.innerWidth
      };
    }, function (newValue, oldValue) {

      scope.resizeWithOffset = function (offsetH) {
        scope.$eval(attr.notifier);
        return {
          'maxHeight': (newValue.h - offsetH) + 'px'
        };
      };
    }, true);

    w.bind('resize', function () {
      scope.$apply();
    });
  };
});