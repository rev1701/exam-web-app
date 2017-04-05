(function () {
    'use strict';

    app.controller('loginCtrl', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {

        // got this code from http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial#projectstructure
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.email, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.email, vm.password);
                    if (response.userType == 1) {
                        $location.path('/associateHome');
                    }
                    if (response.userType == 3) {
                        $location.path('/trainerwelcome');
                    }
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }
    // APIService.getUsers(successFunction, errorFunction);
})();

// associatefirst window controller
(function () {
    'use strict';
    app.controller('associateWelcomeCtrl', HomeController)
})();

HomeController.$inject = ['UserService', 'getBatchInfoService', '$rootScope', '$scope'];
function HomeController(UserService, getBatchInfoService, $rootScope, $scope) {
    $scope.user;
    $scope.userType;
    $scope.userEmail;
    $scope.status;
    $scope.batchName;
    $scope.batchTrainer;

    initController();

    function initController() {
        loadCurrentUser();
    }

    function loadCurrentUser() {
        // doesn't work: if user isn't signed in, will reroute automatically to login screen
        if ($rootScope.globals.currentUser == undefined) {
            $location.path('/login');
        }
        UserService.GetByEmail2($rootScope.globals.currentUser.email)
            .then(function (user) {
                $scope.user = user;
                $scope.userType = user.UserType1.Role;
                $scope.userEmail = user.email;
            });
    }
    var successFunction = function (batch) {      
        var noa = 0; // noa stands for number of associates in a batch

        // only retreives the associates from a batch
        // could actually put this function in the service, but running low on time of completion
        for (var i = 0; i < batch.data[0].Rosters.length; i++) {
            if (batch.data[0].Rosters[i].User.UserType1.Role == "Associate") {
                noa++;
            }
        }

        // returns the correct trainer of a particular batch
        for(var i = 0; i < batch.data[0].Rosters.length; i++){
            if(batch.data[0].Rosters[i].User.UserType1.Role == "Trainer"){
                $scope.batchTrainer = batch.data[0].Rosters[i].User.fname + " " + batch.data[0].Rosters[i].User.lname;
            }
        }

        for(var i = 0; i < batch.data[0].Rosters.length; i++){
            if(batch.data[0].Rosters[i].User.email == $rootScope.globals.currentUser.email){
                $scope.status = batch.data[0].Rosters[i].StatusType.Description;
            }
        }


        $scope.batchName = batch.data[0].BatchID; // returns the batches name
        $scope.fullname = batch.data[0].Rosters; // returns the names of all the associates in a batch
        $scope.numOfAssociates = noa; // return the number of associates in a batch
    }
    var errorFunction = function (err) {
        $scope.batchName = err;
    }

    // getBatchInfoService.getBatch(successFunction, errorFunction);
    getBatchInfoService.getBatch($rootScope.globals.currentUser.email, successFunction, errorFunction);

}

app.controller('associateExamSettingsCtrl', function ($scope) {
    $scope.examname = "Test 1: C# and .NET Framework";
    $scope.startdate = "Monday, April 3, 2017";
    $scope.starttime = "10:00 am";
    $scope.endtime = "12:00 pm";
    $scope.lengthofexam = 90;
    $scope.numberofquestions = 23;
});

app.controller('associateInExamCtrl', function ($scope, $rootScope, $timeout, timerService) {
    $scope.lengthofexam = 90;
    $scope.question = "This is where the WebAPI will retreive the question info and will be displayed here.";
    $scope.answeroptions = "A. This answer B. This answer C. This answer D. This answer";
    $scope.isEditable = false;
    $scope.testStarted = false;

    //timer info
    $rootScope.timer = $scope.lengthofexam;
    // function to start the cooking timer, use the timer service
    this.StartTimer = function () {
        // use timer service to start timer web worker
        $scope.testStarted = true;
        timerService.StartTimer($rootScope.timer);
        timerService.GetCurrentTime();
    };
    // listen to timer event, emitted by timer service
    $rootScope.$on('timer', function (event, data) {
        $rootScope.timer = timerService.ConvertTimerToString(data);
        // $scope.$apply will listen for value changes and update screen bindings
        $scope.$apply(function () {
            $rootScope.timer = timerService.ConvertTimerToString(data);
            if (data === 0) {
                console.log("Your test is now over. Add submit test functionality here.");
            }
        });
    });
    if (timerService.hasStarted === false) {
        this.StartTimer();
    }

}); //controller

app.controller('collapseCtrl', function ($scope, $location) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    $scope.inExam = function () {
        if (location.href == "http://localhost:3000/#!/examinprogress") {
            return true;
        }
        else {
            return false;
        }
    }

});

app.controller('trainerWelcomeCtrl', HomeController, function ($scope, getBatchInfoService) {
    var gradebookClicked = false; // variable that determines if Gradebook is clicked 
    var createexamClicked = false; // variable that determines if Create New Exam is clicked 

    var successFunction = function (batch) {
        var noa = 0; // noa stands for number of associates in a batch

        // only retreives the associates from a batch
        // could actually put this function in the service, but running low on time of completion
        for (var i = 0; i < batch.data.Rosters.length; i++) {
            if (batch.data.Rosters[i].User.UserType1.Role == "Associate") {
                noa++;
            }
        }
        $scope.batchName = batch.data.BatchID;
        $scope.fullname = batch.data.Rosters;
        $scope.numOfAssociates = noa;
    }
    var errorFunction = function (err) {
        $scope.batchName = err;
    }

    getBatchInfoService.getBatch(successFunction, errorFunction);

    $scope.userType = "Trainer";

});