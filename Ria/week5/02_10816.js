const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", (line) => {
    input.push(line.split(' ').map((el) => parseInt(el)));
    count++;

    if (count === 4) rl.close(); // 4줄만 입력
});

rl.on("close", () => {
    howManyCards(input); 
    process.exit();
});

const howManyCards = (input) => {
    const N_cards = input[1];
    const M_cards = input[3];
    const isSameCard = new Array(M_cards.length).fill(0);
    /* isSameCard = [0] 하면 안되고 위의 코드를 써야하는 이유
    1. M_cards와 같은 길이로 배열을 생성해야 함.
    2. M_cards.length만큼 배열을 0으로 초기화
    ==> new Array로 새로운 배열 만들기 */

    M_cards.forEach((M_num, M_index) => {
        // 배열.forEach ((element:값,index,array:생략가능)=>{콜백함수})
        let count = 0;
        N_cards.forEach((N_num) => {
            if (N_num === M_num) {
                count++;
            }
        });
        isSameCard[M_index] = count;
    });
    console.log(isSameCard);
};