const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let H, M;

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    H = input[0];
    M = input[1];
    rl.close();
});

rl.on('close', () => {
    const result = alarm(H, M);
    process.exit();
})

const alarm = (H, M) => {
    M -= 45;

    if (M < 0) {
        H -= 1;
        M += 60;
    }
    if (H < 0) {
        H = 23;
    }
    console.log(H, M);
    return 0;
}