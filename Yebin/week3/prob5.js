const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("",(input)=>{
    var input = input.split(" ");
    var hour = parseInt(input[0]);
    var min = parseInt(input[1]);
    rl.close();
    
    min -= 45;
    if(min<0){
      min += 60;
      hour -=1;
      if(hour<0)
         hour +=24;
    }
    console.log(hour, min);
})