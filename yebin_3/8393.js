const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("",(input)=>{
    rl.close();
    func(parseInt(input));
})

function func(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    console.log(sum);
}