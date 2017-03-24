app.service('timerService', function($rootScope){
    var timerWorker = undefined;
    this.timerOn = function(){
        return false;
    }

    this.StartTimer = function(timeInSeconds){
        if(timerWorker){
            TimerReset(timerWorker);
        }
        // creates and starts a new timer web worker
        timerWorker = new Worker('timerWorker.js');
        // sends timer value to the web worker
        timerWorker.postMessage(timeInSeconds);
    };

    // terminates the web worker timer then deletes it
    this.ResetTimer = TimerReset(timerWorker);

    this.ConvertTimerToString = function(timerInSeconds){
        return TimeToString(timerInSeconds);
    }

    // function to return the current timer value
    this.GetCurrentTime = function(time) {
        this.timerOn = function(){return true};
        var result = 0;
	    var counter = time * 60; 
        var timer;
        
        if (timer){
		    clearInterval(timer);
	    }

	    timer = setInterval(function(){
            if (counter <= 0 || isNaN(counter)){
                clearInterval(timer);
            }
            result = counter;
            counter--;
            // console.log(result);
            console.log(TimeToString(result));
            // $scope.displaytimer = result;
            // $scope.$apply();
	    }, 1000); //setInterval function
        return TimeToString(result);
    };

});

// convert seconds to string format mm:ss
function TimeToString(timeInSeconds) {
	var result = '';
	var s = timeInSeconds % 60; // use modulus to get seconds
	var m = Math.floor(timeInSeconds / 60 % 60); // get minutes
	var h = Math.floor(timeInSeconds / 60 / 60);
	// build the timer as string in format mm:ss
    result += (h < 10)? '0' + h : h;
    result += ':';	
	result += (m < 10)? '0' + m : m; // ternary operator
	result += ':';
	result += (s < 10)? '0' + s : s;

	return result;    
};

function TimerReset(timerworker) {
    // if worker exist, then reset
    if(timerworker) {
        timerworker.terminate(); // stop
        timerworker = undefined; // delete
    }    
};