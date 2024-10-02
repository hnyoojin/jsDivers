let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];
let tempB = b;

let result1 = a * (tempB % 10);
tempB = Math.floor(tempB/10); 

let result2 = a * (tempB % 10);
tempB = Math.floor(tempB/10);

let result3 = a * tempB;
let result = a * b;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result);