var app = angular.module('USL1701.Frontend', ['ui.router', 'ngSanitize', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('/',{
        url: '/home',
        templateUrl: 'views/associateview_intro.html',
         controller: 'associateWelcomeCtrl'
    })
    .state('examsettings',{
        url: '/examsettings',
        templateUrl: 'views/associateview_examsettings.html',
        controller: "associateExamSettingsCtrl"
    })
    .state('examinprogress',{
        url: '/examinprogress',
        templateUrl: 'views/associateview_examinprogress.html',
        controller: 'associateInExamCtrl'
    })
    .state('login',{
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })
    .state('trainerwelcome',{
        url: '/trainerwelcome',
        templateUrl: 'views/trainerview_welcome.html',
        controller: 'trainerWelcomeCtrl'
    });    
    
});