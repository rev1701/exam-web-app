app.controller('signinCtrl', function($scope){
    $scope.msg = "This is the sign in page!";
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
    $scope.lengthoftest = 90;
    $scope.numberofquestions = 40;
});