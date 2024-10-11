const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close(); //rl.close 필수
});

rl.on('close', () => {
    var sum = input[0] + input[1];
    console.log(sum);
    process.exit();
})