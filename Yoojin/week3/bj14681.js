let fs = require('fs');
// let input = fs.readFileSync(0).toString().split("\n");
// https://www.acmicpc.net/board/view/108553
let input = fs.readFileSync('./14681.txt').toString().split('\n');

let x = parseInt(input[0]);
let y = parseInt(input[1]);

if (x>0 && y>0) 
    console.log('1');
else if (x<0 && y>0)
    console.log('2');
else if (x<0 && y<0)
    console.log('3');
else if (x>0 && y<0)
    console.log('4');