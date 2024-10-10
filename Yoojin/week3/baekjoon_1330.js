let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./1330.txt').toString().split(' ');

let A = input[0];
let B = input[1];

if (A>B)
    console.log('>');
if (A<B)
    console.log('<');
if (A==B)
    console.log('==');