var starttimer = function() {
	    var counter = 60; 
        var timer;

        if (timer){
            clearInterval(timer);
        }
	
	    timer = setInterval(function(){
            if (counter <= 0 || isNaN(counter)){
                clearInterval(timer);
            }
            var result = counter;
            counter--;
            console.log("hey");
            // $scope.displaytimer = result;
            // $scope.$apply();
	    }, 1000); //setInterval function
    } //starttimer function