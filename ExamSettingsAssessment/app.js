var app = angular.module("tstApp", ['ngMaterial', 'ngMessages', 'ngRoute']);


app.config(function($locationProvider, $routeProvider){
    //$locationProvider.hashPrefix('');
    
    $routeProvider.when('/', {
        templateUrl : "views/settings.html",
        controller: "settingCtrl"
    })
    .when('/assignSettings', {
        templateUrl : "views/assignSettings.html",
        controller: "assignSettingsCtrl"
    })
    .when('/takeExam', {
        templateUrl : "views/takeExam.html"
        //controller: "takeExam"
    })
    .otherwise({
        redirectto: '/'
    })
});