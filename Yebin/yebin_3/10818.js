const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let inputs=[],linecount=0;

rl.on('line', (input) => {
    inputs.push(input);
    linecount++;

    if (linecount == 2) { 
        rl.close();
        func(input);
    }
});

function func(input){

    const n = parseInt(inputs[0]);
    const numbers = inputs[1].split(" ").map(Number);
    //map(Number)는 각 요소를 Number함수를 이용해 숫자로 변환

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < n; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    console.log(min, max);
}