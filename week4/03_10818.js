const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let len;
let lineCount = 0;
let min = 1000000;
let max = -1000000;

rl.on("line", (line) => {
    if (lineCount === 0) {
        len = parseInt(line);
        lineCount++;
    } else if (lineCount === 1) {
        input = line.split(' ').map(el => parseInt(el));
        rl.close();
    }
    // lineCount로 첫번째입력, 두번쨰입력을 구분 안해주면 두 줄의 내용을 각각 다르게 처리하기 어렵다. (두번쨰 입력만 input에 덮어쓰기 어려움)
});

rl.on('close', () => {
    min_max(input);
    process.exit();
});



const min_max = (input) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i] <= min)
            min = input[i];
        if (input[i] >= max)
            max = input[i];
    }
    console.log(min, max);
}