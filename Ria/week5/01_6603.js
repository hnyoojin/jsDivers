const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []; // 입력받는다
const k = [];
const S = [];
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el));

    if (input[0] === 0 && input.length === 1) {
        rl.close();
    }
    else {
        // k.push(index[0]) : (다음코드 slice(1) 때문에) 입력 데이터의 구조가 바뀌어서 조합 함수에서 NaN이 출력되는 문제
        S.push(input.slice(1)); //=> input[1:]와 같은기능
    }

});
 
rl.on('close', () => {
    S.forEach(lottoCombination); // forEach로 한 case씩 함수에 넣기
    process.exit();
})

const lottoCombination = (S) => {
    const lottoCase = [];
    /* 
    for (let i = 0; i < S.length; i++) {
        if (S[i].length === 6) {
            lottoCase.push(...S[i]);
            continue;
        }
        for (let firstIndex = 0; firstIndex < S[i].length;firstIndex++){
            for (let j = 0; j < 6; j++){
            lottoCase[i].push(...S[i][firstIndex]);
            }
        }
        console(lottoCase[i]);
    }
    */
    const nCm = (startIndex, selectedArr) => {
        if (selectedArr.length === 6) {
            lottoCase.push(selectedArr.join(' '));
            return;
        }
        for (let i = startIndex; i < S.length; i++) {
            nCm(i+1, [...selectedArr, S[i]]);
        }
    };
    nCm(0, []);
    console.log(lottoCase.join('\n'));
    console.log();
}