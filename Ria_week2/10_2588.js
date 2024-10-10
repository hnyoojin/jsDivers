const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on("line", (line) => {
    if (line == "exit")
        rl.close();
    else
        input.push(line);
});

rl.on('close', () => {
    var inputA = parseInt(input[0]);
    var inputB = parseInt(input[1]);
    var C = input[0] * input[1][2];
    var D = input[0] * input[1][1];
    var E = input[0] * input[1][0];
    var result = C + D * 10 + E * 100;
    console.log(C);
    console.log(D);
    console.log(E);
    console.log(result);
    process.exit();
})
