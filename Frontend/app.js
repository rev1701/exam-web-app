var app = angular.module("USL1701.Frontend", ['ngRoute']);

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

    .when('/editlistings',
    {
        templateUrl: 'views/editlistings.html',
        controller: 'editlistingsCtrl'
    })
}

);