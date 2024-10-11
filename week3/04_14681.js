const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let A, B;

rl.on("line", (line) => {
    input.push(parseInt(line));
    A = input[0];
    B = input[1];
});

rl.on('close', () => {
    const result = quadrant(A, B);
    console.log(result);
    process.exit();
})

const quadrant = (A, B) => {
    if (A > 0) {
        if (B > 0) return 1;
        else return 4;
    }
    else {
        if (B > 0) return 2;
        else return 3;
    }
}