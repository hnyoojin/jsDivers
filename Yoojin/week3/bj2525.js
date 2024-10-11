let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./2525.txt').toString().split('\n');

let [H, M] = input[0].split(' ').map(Number);
let cookTime = parseInt(input[1]);

M += cookTime;

if (M >= 60) {
    H += Math.floor(M / 60);
    M = M % 60;
}

if (H >= 24) {
    H = H % 24;
}

console.log(H, M);