// n이 주어졌을 때, 1부터 n까지의 합을 구하는 프로그램을 작성하시오

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./8393').toString().trim();

const n = parseInt(input);
let sum = 0;

for (let i=1; i<=n; i++) {
    sum+=i;
}

console.log(sum);