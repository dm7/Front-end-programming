function Timer(start, interval) {
    this.start = start;
    this.interval = interval;
    this.cancelInvocation = false;
}

Timer.prototype.counting = function(){
    if (!this.cancelInvocation) {
        var self = this;
        this.ID = setTimeout(function(){self.counting();}, this.interval);
        console.log(this.start + " id is: " + this.ID);
        //console.log(this.ID);
        this.start++;
    }else{
        clearTimeout(this.ID);    
    }
    
}

Timer.prototype.clearTimeOut = function(){this.cancelInvocation = true;};

var timer1 = new Timer(0, 1000);
var timer2 = new Timer(1000, 1000);
timer1.counting();
timer2.counting();

setTimeout(function(){timer1.clearTimeOut();}, 10000);
setTimeout(function(){timer2.clearTimeOut();}, 20000);

/*
    var start = 0;
    function counter() {
        var closureCount = start++;
        console.log(closureCount);
        setTimeout(counter, 1000);
    }
    counter();
*/