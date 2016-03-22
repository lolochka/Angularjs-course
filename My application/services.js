//SERVICE
weatherApp.service('cityService',[function() {
    
    var self = this;
    self.city = "London";
    
}])

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days) {
        var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=087dd518d53b2120ac54481c4ccd522c", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP"}});
        
    
        return weatherApi.get({ q: city, cnt: days});
    }
}]);