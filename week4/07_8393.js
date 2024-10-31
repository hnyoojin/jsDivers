const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;

rl.on("line", (line) => {
    n = parseInt(line);
    rl.close();
});

rl.on('close', () => {
    sum(n);
    process.exit();
})

const sum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}