const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
let linecount=0;

rl.on('line', (input) => {
    lines.push(input);
    linecount++;

    if (linecount == 3) { 
        rl.close();
        let A = parseInt(lines[0]);
        let B = parseInt(lines[1]);
        let C = parseInt(lines[2]);
        func(A,B,C);
    }
});

function func(A,B,C){
    let result = String(A*B*C);
    for(let i=0;i<10;i++){
        let count =result.split(String(i)).length - 1;
        console.log(count);
    }
}
