const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let inputs = [];
rl.on("line",(input)=>{
    inputs.push(parseInt(input));
    if (inputs.length == 2){
        var x = parseInt(inputs[0]);
        var y = parseInt(inputs[1]);
        rl.close();
    
        if(x>0){
            if(y>0) console.log(1);
            else console.log(4);
        }
        else{
            if(y>0) console.log(2);
            else console.log(3);
        }
    }
})