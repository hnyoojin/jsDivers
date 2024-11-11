const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("", (input) => {
    rl.close();
    counthansu(input); 
});

function ishansu(num){
    if (num.length <= 2) 
        return 1;

    let diff = num[1] - num[0];
    for (let i = 2; i < num.length; i++) {
        if (num[i] - num[i - 1] != diff) 
            return 0;
    }
    return 1;
}

function counthansu(num) {
    let count = 0;
    for (let i = 1; i <= parseInt(num); i++) {
        if (ishansu(String(i))) count++;
    }
    console.log(count);
}
