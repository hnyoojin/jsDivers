let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./9498.txt').toString().split(' ');

let score = parseInt(input);

if (score>=90 && score<=100)
    console.log('A');
if (score>=80 && score<90)
    console.log('B');
if (score>=70 && score<80)
    console.log('C');
if (score>=60 && score<70)
    console.log('D');
if (score<60)
    console.log('F')
if (score>100)
    console.log('Wrong range')