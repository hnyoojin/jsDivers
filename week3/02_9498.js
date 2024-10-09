const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let score;

rl.on("line", (line) => {
    score = parseInt(line);
    rl.close();
});

rl.on('close', () => {
    const result = exam(score);
    console.log(result);
    process.exit();
})

const exam = (score) => {
    if (score > 90) return "A";
    else if (score > 80) return "B";
    else if (score > 70) return "C";
    else if (score > 60) return "D";
    else return "F";
}