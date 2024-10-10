const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    var AD_year = parseInt(line) - 543; // int 형변환
    console.log(AD_year);
    rl.close();
});

rl.on("close", () => {
    process.exit();
});

