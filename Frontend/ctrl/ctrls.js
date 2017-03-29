app.controller('loginCtrl', function($scope, $location, APIService, UserData){
    $scope.msg = "This is the sign in page!";
    
    var successFunction = function(ship) {
        var users = ship.data;
    }
    var errorFunction = function(err) {
        $scope.ship = err;
    };
    APIService.getUsers(successFunction,errorFunction);

    $scope.check = function checkUser(Email,Pword) {
        angular.forEach(users, function (value, index) {
            if (value.Email == Email && value.Password == Pword) {
                if(value.UserType == 1){
                    UserData.userName = value.FirstName + " " + value.LastName;
                    $location.path("/home");

                }
                else if(value.UserType == 2){

                }
                else if(value.UserType == 3){

                }
                else{
                  
                }
            
            }
        })
    }
});


// associatefirst window controller
app.controller('associateWelcomeCtrl', function($scope, UserData) {
    
});

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

    //timer info
    $rootScope.timer = $scope.lengthofexam;
    // function to start the cooking timer, use the timer service
    this.StartTimer = function () {
        // use timer service to start timer web worker
        timerService.StartTimer($rootScope.timer);
        timerService.GetCurrentTime();
        // console.log(timerService.GetCurrentTime());
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

app.controller('collapseCtrl', function ($scope) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});

app.controller('trainerWelcomeCtrl', function ($scope) {
    $scope.userName = "Joe Kirkbride";
    $scope.batchName = "1701 .NET";
    $scope.userType = "Trainer";
    $scope.numOfAssociates = 8;
});