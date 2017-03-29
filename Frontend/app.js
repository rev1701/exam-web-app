var app = angular.module('USL1701.Frontend', ['ui.router', 'ngSanitize', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']);

<<<<<<< HEAD

app.config(function($stateProvider, $urlRouterProvider, $qProvider) {
    $urlRouterProvider.otherwise('/login');
=======
var app2 = app.config(function($stateProvider, $urlRouterProvider, $qProvider) {
    $urlRouterProvider.otherwise('/home');
>>>>>>> bc338332770c10837e5579e31486dc01bb1c5a47
    $qProvider.errorOnUnhandledRejections(false);
    
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
        views:{
            '': {
            templateUrl: 'views/examnavbar.html'}
            ,
            'progress@examinprogress':{
            templateUrl: 'views/associateview_examinprogress.html',
            }
        },
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