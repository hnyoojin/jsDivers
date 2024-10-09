const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let year;

rl.on("line", (line) => {
    year = parseInt(line);
    rl.close();
});

rl.on('close', () => {
    const result = isLeap(year);
    console.log(result);
    process.exit();
})

const isLeap = (year) => {
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) return 1;
    else return 0;
}