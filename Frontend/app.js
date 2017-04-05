var app = angular.module('USL1701.Frontend', ['ui.router', 'ngSanitize', 'ui.bootstrap', 'ngAnimate']);

(function () {
    'use strict';

    app.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
        $urlRouterProvider.otherwise('/login');
        $qProvider.errorOnUnhandledRejections(false);

        $stateProvider
            .state('/', {
                url: '/associateHome',
                templateUrl: 'views/associateview_intro.html',
                controller: 'associateWelcomeCtrl'
            })
            .state('examsettings', {
                url: '/examsettings',
                templateUrl: 'views/associateview_examsettings.html',
                controller: "associateExamSettingsCtrl"
            })
            .state('examinprogress', {
                url: '/examinprogress',
                views: {
                    '': {
                        templateUrl: 'views/examnavbar.html'
                    }
                    ,
                    'progress@examinprogress': {
                        templateUrl: 'views/associateview_examinprogress.html',
                    }
                },
                controller: 'associateInExamCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .state('trainerwelcome', {
                url: '/trainerwelcome',
                views: {
                    '': {
                        templateUrl: 'views/trainerview_welcome.html',
                        controller: 'trainerWelcomeCtrl'
                    },
                    'gradebook@trainerwelcome': {
                        templateUrl: 'views/gradebook.html',
                        controller: 'trainerWelcomeCtrl'
                    }
                }
            })
            .state('trainerChangeExistingExam', {
                url: '/trainerChangeExistingExam',
                templateUrl: 'views/trainerview_changeexistingexam.html',
                controller: 'trainerChangeExistingExam'
            })
            .state('examQuestionView', {
                url: '/examQuestionView',
                templateUrl: 'views/examQuestionView.html',
                controller: 'examViewController'
            });

    });

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();