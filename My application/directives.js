//DIRECTIVE

weatherApp.directive('temperature',function() {
    return {
        restrict: 'EA',
        templateUrl: 'directives/temp.html',
        replace: true,
        scope: {
            report: "=",
            convertToDate: "&",
            convertToStandart: "&",
            dateFormat: "@"
        }
    }
})