const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("",(input)=>{
    var inputs = input.split(' ');
    var num1 = parseInt(inputs[0]);
    var num2 = parseInt(inputs[1]);
    rl.close();
    
    if(num1>num2) console.log(">")
    else if(num1<num2) console.log("<")
    else console.log("==")
})