app.controller('loginCtrl', function ($scope) {
    $scope.msg = "This is the sign in page!";
});


// associatefirst window controller
app.controller('associateWelcomeCtrl', function ($scope) {
    $scope.status = "Doing Great!";
    $scope.batchName = "1701 .NET";
    $scope.batchTrainer = "Joe Kirkbride";
    $scope.userName = "Stephen Kirkland";
    $scope.userType = "Associate";
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
    $scope.testStarted = false;

    //timer info
    $rootScope.timer = $scope.lengthofexam;
    // function to start the cooking timer, use the timer service
    this.StartTimer = function () {
        // use timer service to start timer web worker
        $scope.testStarted = true;
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

app.controller('collapseCtrl', function ($scope, $location) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    $scope.inExam = function(){
        if(location.href == "http://localhost:3000/#!/examinprogress"){
            return true;
        }
        else{
            return false;
        }
    }
    
});

app.controller('trainerWelcomeCtrl', function ($scope, getBatchInfoService) {
    
    var successFunction = function(batch){
        $scope.batchName = batch.data.BatchID;
        $scope.fullname = batch.data.Rosters;
    }
    var errorFunction = function(err){
        $scope.batchName = err;
    }

    getBatchInfoService.getBatch(successFunction, errorFunction);

    $scope.userName = "Joe Kirkbride";
    $scope.userType = "Trainer";
    $scope.numOfAssociates = 8;
});