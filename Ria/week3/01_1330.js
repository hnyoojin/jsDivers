const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});

rl.on('close', () => {
    const [A, B] = input;
    const result = isSame(A, B);
    console.log(result);
    process.exit();
})

const isSame = (A, B) => {
    if (A > B) return ">";
    else if (A < B) return "<";
    else return "==";
}