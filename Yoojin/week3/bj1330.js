let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./1330.txt').toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (A>B)
    console.log('>');
else if (A<B)
    console.log('<');
else if (A==B)
    console.log('==');