const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let H, M, time;

rl.on("line", (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));
});

rl.on('close', () => {
    H = input[0][0];
    M = input[0][1];
    time = input[1][0];

    const result = oven(H, M, time);
    process.exit();
});

const oven = (H, M, time) => {
    M += time;
    if (M >= 60) {
        H += Math.floor(M / 60);
        M %= 60;
    }
    if (H >= 24) {
        H %= 24;
    }
    console.log(H, M);
    return 0;
};
