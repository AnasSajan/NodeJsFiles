// const exec = require("child_process").exec;


// const child = exec('ls', function(error,stdout,stderr){
//     if(error!==null){
//         console.log("hey...there is an error");
//         throw error;
//     }
    
    
// console.log(`stdout is: ${stdout}`);    
// console.log(`stderr is: ${stderr}`);    
// });

const execFile = require("child_process").execFile;
const child  = execFile('node', ['--version'], function(error, stdout){
    
    if(error!==null){
        console.log("hey...there is an error");
         throw error;
     }
    
    
console.log(`stdout is: ${stdout}`);    
  

    
});

// const child = exec('ls', function(error,stdout,stderr){
