const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

var num;

rl.question("",(input)=>{
    rl.close();
    func(parseInt(input));
})

function func(num){
    for(let i=1;i<10;i++){
        console.log(num,'*',i,'=',num*i);
    }
}
