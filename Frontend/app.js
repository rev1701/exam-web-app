var app = angular.module("USL1701.Frontend", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(function($routeProvider)
{
    $routeProvider.when
    ('/', 
        {
            templateUrl: 'views/associateview_intro.html',
            controller: 'associateWelcomeCtrl'
        }
    )

    .when('/examsettings',
    {
        templateUrl: 'views/associateview_examsettings.html',
        controller: "associateExamSettingsCtrl"
    })

    .when('/examinprogress',
    {
        templateUrl: 'views/associateview_examinprogress.html',
        controller: 'associateInExamCtrl'
    })

    .when('/login',
    {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })
    
    .when('/trainerwelcome', 
    {
        templateUrl: 'views/trainerview_welcome.html',
        controller: 'trainerWelcomeCtrl'
    })
}

);