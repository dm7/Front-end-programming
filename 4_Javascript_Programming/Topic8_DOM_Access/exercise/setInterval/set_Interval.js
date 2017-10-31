/*
 *The difference is subtle:
 *     1) setInterval code executes every 1000ms exactly, while...
 *     2) setTimeout waits 1000ms, runs the function (which takes
 *          few ms), then sets another timeout. So the wait
 *          period is actually a bit more than 1000ms.
 *
 */



/*
 *Immutable Timer class
 *Properties of instances will be read only and non-configurable
 *writable: false => read only
 *configurable: false => cannot delete property
 */

function Timer(obj, startTime, interval) {
    var PDO ={
        obj:{value: obj, enumerable: true, writable:false, configurable:false},
        startTime: {value:startTime, enumerable:true, writable:false, configurable:false},
        interval: {value:interval, enumerable:true, writable:false, configurable:false}
    };
    Object.defineProperties(this, PDO);
}

Timer.prototype.readProperties = function(){
    var props = Object.getOwnPropertyNames(this.obj);
    var self = this;
    function readPDO(){
        console.log(Object.getOwnPropertyDescriptor(self.obj, props[0]));
        props.shift();
        if (props.length === 0) {
            clearInterval(self.clearID);
        }
    }
    setTimeout(function(){
        self.clearID = setInterval(function(){
                                        readPDO();
                                    },
                                    self.interval
                                  );
                        },
                        self.startTime
              );
}

var t = new Timer({x:1, y:2}, 10000, 3000);
t.readProperties();


/*
 *var start = 0;
 *var ID = setInterval(function(){console.log(start++);}, 1000);
 *setTimeout(function(){clearInterval(ID)}, 10000);
 */