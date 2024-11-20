const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function Lotto(){
    this.inputs= [];
}

Lotto.prototype.init = function(line){
    this.inputs.push(line);
}

Lotto.prototype.processInputs = function () {
    this.inputs.forEach((line, index) => {
        let parts = line.split(" "); //공백으로 분리
        let numSet = parts.slice(1).map(Number);//숫자 집합 

        let combos = combination(numSet, 6);

        //공백으로 연결해서 출력 가능하게 함
        combos.forEach((combo) => console.log(combo.join(" ")));

        if (index < this.inputs.length - 1) { // 공백 만들기
            console.log("");
        }
    });
};

//깊이 우선 탐색 (DFS) 활용...
function combination(arr, selectNum) {
    let result = []; //모든 조합 저장 배열
    let stack = []; //탐색 중인 조합 저장 배열

    function dfs(start) {
        if (stack.length === selectNum) {
            //조합의 길이가 selectNum에 도달한다면 종료
            result.push([...stack]); //현재 조합을 복사한 후 추가
            return;
        }

        for (let i = start; i < arr.length; i++) {
            stack.push(arr[i]); // 숫자 선택
            dfs(i + 1); //다음 숫자 선택
            stack.pop(); //선택한 숫자 제거
        }
    }

    dfs(0); //탐색 시작
    return result;
}

const MyLotto = new Lotto();

rl.on("line", (line) => {
    if (line === "0") { //0이 입력되면
        MyLotto.processInputs(); //여태 입력받은 값들 한 번에 처리
        rl.close();
    } else {
        MyLotto.init(line);
    }
});
