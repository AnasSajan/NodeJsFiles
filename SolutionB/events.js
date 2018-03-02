var events = require("events");

var emitter = new events.EventEmitter();

emitter.on('myEvent', function(message, code){
    
    console.log(message + ":" + code);
});

emitter.emit('myEvent', "This is cool", 404);
