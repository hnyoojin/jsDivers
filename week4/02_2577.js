const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let double = 1;

rl.on("line", (line) => {
    input.push(parseInt(line));
});

rl.on('close', () => {
    howMany(input);
    process.exit();
})

const howMany = (input) => {
    for (let i = 0; i < input.length; i++) {
        double *= input[i];
    }
    double = double.toString();
    for (let num = 0; num <= 9; num++) {
        let use = 0;
        for (let i = 0; i < double.length; i++) {
            if (parseInt(double[i]) == num) use++;
        }
        console.log(use);
    }
}