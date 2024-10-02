/*두 자연수 A와 B가 주어진다. 
이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 
출력하는 프로그램을 작성하시오. */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("",(input)=>{
    var inputs = input.split(' ');
    var A = parseInt(inputs[0]);
    var B = parseInt(inputs[1]);
    rl.close(); 
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(A/B);
    console.log(A%B);
})