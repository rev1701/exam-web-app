// service for timer
// features:
// -- reset timer
// -- start timer
// -- timer toString

app.service('timerService', function($rootScope) {
    var timerWorker = undefined; // if not undefined then web worker is running
    
    // start timer web worker
    this.StartTimer = function(timeInSeconds) {
        // if worker exist, then reset
        if (timerWorker) {
            TimerReset(timerWorker);
        }
        // create & start new timer web worker
        timerWorker = new Worker('timerWorker.js');
        // console.log(timerWorker);
        // send timer value to web worker
        timerWorker.postMessage(timeInSeconds);
    };
    
    // terminate timer web worker and 'delete' it
    this.ResetTimer = TimerReset(timerWorker);
    
    // convert time in seconds to string format mm:ss
    this.ConvertTimerToString = function(timerInSeconds) {
        return TimeToString(timerInSeconds);
    };

    // function to return the current timer value
    this.GetCurrentTime = function() {
        var result = 0; // time in seconds
        
        // get time from timer web worker
        if (timerWorker) {
            // listen to web worker
            timerWorker.onmessage = function(workerEvent) {
                result = workerEvent.data;
                // if timer is done, i.e. at zero
                if (result === 0) {
                    TimerReset(timerWorker); // reset timer
                }
                $rootScope.$emit('timer', result); // emit event with result value
            };
        }

        return result;
    };
});

/**********************
   HELPER FUNCTIONS
**********************/

// convert seconds to string format mm:ss
function TimeToString(timeInSeconds) {
	var result = '';
	var s = timeInSeconds % 60; // use modulus to get seconds
	var m = Math.floor(timeInSeconds / 60 % 60); // get minutes
    var h = Math.floor(timeInSeconds / 60 / 60); // get hours
	
	// build the timer as string in format hh:mm:ss
    result += (h < 10)? '0'	+ h : h;
	result += ':';
    result += (m < 10)? '0' + m : m; // ternary operator
	result += ':';
	result += (s < 10)? '0' + s : s;

	return result;    
};

// reset the timer
function TimerReset(timerworker) {
    // if worker exist, then reset
    if(timerworker) {
        timerworker.terminate(); // stop
        timerworker = undefined; // delete
    }    
};


app.service('editableService', function(){
    this.Editable = function(edit){
        if(edit === false){
            // disable all buttons
            console.log("The buttons should be disabled now...");
            document.getElementById("examNumberButton").disabled = true;
        }

        else{
            // leave the buttons on
            console.log("Edit all you wants. :D...until time runs out");
        }
    };
});