app.controller('loginCtrl', function($scope, APIService){
    $scope.msg = "This is the sign in page!";
    var users = APIService.getUsers();
});


// associatefirst window controller
app.controller('associateWelcomeCtrl', function($scope){
    $scope.status = "Doing Great!";
    $scope.batchName = "1701 .NET";
    $scope.batchTrainer = "Joe Kirkbride";
    $scope.userName = "Stephen Kirkland";
    $scope.userType = "Associate";
});

app.controller('associateExamSettingsCtrl', function($scope){
    $scope.examname = "Test 1: C# and .NET Framework";
    $scope.startdate = "Monday, April 3, 2017";
    $scope.starttime = "10:00 am";
    $scope.endtime = "12:00 pm";
    $scope.lengthofexam = 1;
    $scope.numberofquestions = 40;
});

app.controller('associateInExamCtrl', function($scope, $timeout, $interval, timerService){
    $scope.lengthofexam = 1;
    $scope.question = "This is where the WebAPI will retreive the question info and will be displayed here.";
    $scope.answeroptions = "A. This answer B. This answer C. This answer D. This answer";
    if(timerService.timerOn() === false){
        $scope.displaytimer = timerService.GetCurrentTime($scope.lengthofexam);
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