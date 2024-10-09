const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// rl.on('line') 사용 -> 엔터 키를 누를 떄마다 입력 받을 수 있음
var inputs = [];
rl.on("line",(input)=>{
    inputs.push(input);
    if (inputs.length == 2){
    var A = parseInt(inputs[0]);
    var B = parseInt(inputs[1]);
    
    var tmp = B%10;
    console.log(A*tmp);

    tmp = ((B-tmp)%100)/10;
    console.log(A*tmp);
    
    tmp = (B-B%100)/100;
    console.log(A*tmp);

    console.log(A*B);

    rl.close();
    }
})