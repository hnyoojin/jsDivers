const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); // A B C
    rl.close();
});

rl.on('close', () => {
    var A = input[0];
    var B = input[1];
    var C = input[2];
    console.log((A + B) % C);
    console.log(((A % C) + (B % C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B % C)) % C);
    process.exit();
})