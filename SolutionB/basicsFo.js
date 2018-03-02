var readline = require("readline");


var rl = readline.createInterface({
   input: process.stdin,
   output:process.stdout
    
});

rl.question('Will you go out for dinner with me?', function(answer){
    if(answer === "yes"){
        console.log("thanks");
    }else{
        console.log("OK");
    }
    rl.close();
    
   // console.log(answer);
    
    
});