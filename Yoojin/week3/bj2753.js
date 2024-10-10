let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./2753.txt').toString().split(' ');

let year = parseInt(input);

if (year%4==0 && year%100!=0)
    console.log(1);
else if (year%400==0)
    console.log(1);
else 
    console.log(0);