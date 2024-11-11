const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let N;

rl.on("line", (line) => {
    N = parseInt(line);
    rl.close();
});

rl.on('close', () => {
    hansu(N);
    process.exit();
})

const hansu = (N) => {
    let count = 0;
    if (N <= 99)
        console.log(N);
    else {
        count = 99;
        for (let i = 100; i < N; i++) {
            let n_1 = Math.floor(i / 100);
            let n_2 = Math.floor((i - (100 * n_1)) / 10);
            let n_3 = i % 10;

            if (n_1 - n_2 == n_2 - n_3) {
                count++;
            }
        }
        console.log(count);
    }
}

