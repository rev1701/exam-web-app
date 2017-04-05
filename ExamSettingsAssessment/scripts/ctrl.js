app.controller('assignSettingsCtrl', function($scope){





});

app.controller('settingCtrl', function ($scope, storeExamSettings) {
    $scope.myDate = new Date();

    $scope.examSettings =
        {
            ExamSettingsID: 0,
            StartTime: new Date(),
            LengthOfExamInMinutes: 0,
            EndTime: new Date(),
            AllowedAttempts: 0,
            ExamTemplateID: "something_1",
            Editable: false,

        }

    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth(),
        $scope.myDate.getDate()
    );

    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 6,
        $scope.myDate.getDate()
    );

    $scope.startTime;

    $scope.isOpen = false;

    $scope.finalDate = new Date();

    $scope.timeLimitInMinutes = 60;

    $scope.timeOpenInHours = 2;

    $scope.examTemplates = [
        { examId: "Training_2" },
        { examId: "Training_1" },
        { examId: "Training_3" }
    ];

    $scope.selectedTemplate = "none"

    $scope.editableTest = false;

    $scope.allowedAttempts = 0;

    $scope.endTime = 0;

    $scope.submitExamSetting = function () {
        //do stuff in here when submit

        $scope.endTime = parseInt($scope.startTime) + parseInt($scope.timeOpenInHours);
        $scope.examSettings.StartTime = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth(),
            $scope.myDate.getDate()
        );

        $scope.examSettings.EndTime = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth(),
            $scope.myDate.getDate(),
        );

        $scope.examSettings.StartTime.setHours(parseInt($scope.startTime) - 4);
        $scope.examSettings.EndTime.setHours($scope.endTime - 4);

        $scope.examSettings.LengthOfExamInMinutes = $scope.timeLimitInMinutes;

        $scope.examSettings.AllowedAttempts = $scope.allowedAttempts;
        $scope.examSettings.ExamTemplateID = $scope.selectedTemplate;
        $scope.examSettings.Editable = $scope.editableTest;

        storeExamSettings.saveSettings($scope.examSettings, successFunction, errorFunction);
    };

    $scope.returnedData = "none";

    var successFunction = function (data) {
        $scope.returnedData = data;
    }
    var errorFunction = function (err) {
        $scope.returnedData = err;
    };


});



