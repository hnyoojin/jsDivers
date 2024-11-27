const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let count = 0;
let PS=[];

rl.on("line", (line) => {   
    input.push(line);
    count++;

    if (Number(input[0]) + 1 === count) {
        PS.push(input.slice(1));
        rl.close();
    }
});

rl.on("close", () => {
    isVPS(PS);
    process.exit();
});

const isVPS = (PS) => {
    PS[0].forEach(psStr => { // PS = [[...]] 형식이어서 PS[0].forEach 함
        let leftPS = 0;
        let rightPS = 0;

        for (let i = 0; i<psStr.length; i++){
            if (psStr[i] === '(')
                leftPS++;
            else if (psStr[i] === ')')
                rightPS++;
        }
        if (leftPS === rightPS)
            console.log("YES");
        else
            console.log("NO");
    });
};