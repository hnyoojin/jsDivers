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
    console.log(input[0] + input[1]);
    console.log(input[0] - input[1]);
    console.log(input[0] * input[1]);
    console.log(Math.floor(input[0] / input[1])); // 몫: Math.floor() 이용 -> // 아님!!
    console.log(input[0] % input[1]);

    process.exit();
})