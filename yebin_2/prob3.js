const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("",(input)=>{
    var year = parseInt(input);
    rl.close();
    
    if((year%4==0 && year%100!=0) || (year%400==0))
        console.log(1);
    else console.log("0")
})