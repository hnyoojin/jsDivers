let fs = require('fs');
// Yoojin 폴더 내에서 실행시키려면 ./1000.txt
let input = fs.readFileSync('/dev/stdin").toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b);