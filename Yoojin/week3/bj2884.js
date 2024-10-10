let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./2884.txt').toString().split(' ');

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M < 45) {
    M += 15;
    if (H<1) H = 23;
    else H -= 1;
} else M -= 45;

console.log(H+" "+M);