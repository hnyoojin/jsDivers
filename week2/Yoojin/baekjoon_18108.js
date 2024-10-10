let fs = require('fs');
let year = fs.readFileSync('/dev/stdin');

console.log(year-543);