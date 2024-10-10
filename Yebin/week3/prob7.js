const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.on("line",(input)=>{
  var inputs = input.split(" ");
  rl.close();
  
  var num1 = parseInt(inputs[0]);
  var num2 = parseInt(inputs[1]);
  var num3 = parseInt(inputs[2]);
  var money = 0;

    if (num1==num2 && num2==num3){
        money = 10000 + 1000*num1
    }
    else if(num1!=num2 && num2!=num3){
        money = Math.max(num1,num2,num3) * 100;
    }
    else {
        let sameNum;
        if(num1==num2)
            sameNum = num1;
        else if (num2==num3)
            sameNum = num2;
        else sameNum = num1;

        money = 1000 + 100*sameNum;
    }

    console.log(money);
})