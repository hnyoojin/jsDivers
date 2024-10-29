let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./2577').toString().trim().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const num = Array(10).fill(0);

let mul = A * B * C;

while (mul > 0) {
    let n = mul % 10;
    mul = Math.floor(mul/10);
    num[n]++;
}

for (let i = 0; i < 10; i++) {
    console.log(num [i]);
}