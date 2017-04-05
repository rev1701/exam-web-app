app.factory('storeExamSettings', function ($http) {
    var domain = "http://localhost:56991/api/ExamSettings/StoreSettings";

    // function returns the promise
    var SaveSettings = function (settingsData, successCallback, errorCallback) {
        $http.post(domain, settingsData)
            .then(function (data) {
                successCallback(data);
            }, function (err) {
                errorCallback(err);
            });


    };

    return {
        saveSettings: SaveSettings
    }
});