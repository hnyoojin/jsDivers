const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let count = 0;
let M = [];
let result = [];

rl.on("line", (line) => {   
    input.push(line);
    count++;

    if (Number(input[0]) + 1 === count) {
        M.push(input.slice(1));
        rl.close();
    }
});

rl.on("close", () => {
    calculation(M);
    process.exit();
});



const calculation = (input) => {
    input[0].forEach(M => {
        M = M.split(' ');
        opType(M);
   });
}

const opType = (M) => {
    let operation = M[0];
    let number = M[1];
    if (operation === "add")
        addNum(number);
    else if (operation === "remove")
        removeNum(number);
    else if (operation === "check")
        checkNum(number);
    else if (operation === "toggle")
        toggleNum(number);
    else if (operation === "all")
        allNum();
    else if (operation === "empty")
        emptyNum();
}


const addNum = (num) => {
    if (result.includes(num) == false)
        // includes(): 배열에 요소 포함 여부 체크
        result.push(num);
}
const removeNum = (num) => {
    result.forEach((el, index) => {
        if (el === num)
            result.splice(index, 1);
    })
}
const checkNum = (num) => {
    const isValid = result.some(el => el === num);
    // some(): 배열에서 조건을 만족하는 첫 요소를 찾으면 true, 없으면 false 반환
    if (isValid)
        console.log(1);
    else
        console.log(0);
    return isValid;
}
const toggleNum = (num) => {
    if (result.includes(num))
        removeNum(num);
    else 
        addNum(num);
}
const allNum = () => {
    result.sort((a, b) => a - b);
}
const emptyNum = () => {
    result = []; // 빈 배열 만들려면 splice 쓰지말고 그냥 [] 이거 하기
}