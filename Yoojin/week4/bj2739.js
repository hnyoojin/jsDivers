// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input[0]);

for (let i = 1; i < 10; i++) {
    console.log(n+" * "+i+" = "+n*i);
}