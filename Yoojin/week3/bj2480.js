let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('./2480.txt').toString().split(' ');

let dice1 = parseInt(input[0]);
let dice2 = parseInt(input[1]);
let dice3 = parseInt(input[2]);

let price = 0;

if (dice1==dice2) {
    if (dice2==dice3) 
        price = 10000+dice1*1000;
    if (dice2!=dice3)
        price = 1000+dice1*100
}
if (dice1!=dice2) {
    if (dice2==dice3) 
        price = 1000+dice2*100;
    if (dice2!=dice3)
        price = 100*Math.max(Math.max(dice1,dice2), Math.max(dice2,dice3));
}

console.log("price = "+price);