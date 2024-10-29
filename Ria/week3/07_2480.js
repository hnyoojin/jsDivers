const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let a, b, c;

rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});

rl.on('close', () => {
    a = input[0];
    b = input[1];
    c = input[2];
    const result = dice(a, b, c);
    process.exit();
});

const dice = (a, b, c) => {
    let result;
    if (a == b && b == c)
        result = 10000 + (a * 1000);
    else if (a == b || a == c)
        result = 1000 + (a * 100);
    else if (b == c)
        result = 1000 + (b * 100);

    else {
        if (a >= b && a >= c)
            result = a * 100;
        else if (b >= a && b >= c)
            result = b * 100;
        else result = c * 100;
    }
    console.log(result);
    return 0;
}