const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//자바 스크립트의 Map 객체
//Map 객체는 키와 값의 쌍을 저장한다...!
//파이썬의 딕셔너리와 비슷함
function Card(){
    this.cardAndCount = new Map(); 
    // 숫자 카드와 개수를 딕셔너리처럼 저장 가능
    //key:value 처럼!!
    this.isthereques = []; // 요청된 숫자들
}

Card.prototype.addCards = function (cards) {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i]; 

        // 현재 숫자가 이미 있는지 확인
        if (this.cardAndCount.has(card)) {
            let currentCount = this.cardAndCount.get(card); // 현재 개수 가져오기
            this.cardAndCount.set(card, currentCount+1); // 새로운 개수 저장
        } else {
            // 없다면 새로 추가 + 값 1로 설정
            this.cardAndCount.set(card, 1);
        }
    }
};

Card.prototype.inputnums = function (nums) {
    this.isthereques = nums; // 요청된 숫자 저장
};

Card.prototype.printResult = function () {
    let results = [];

    for (let i = 0; i < this.isthereques.length; i++) {
        let num = this.isthereques[i]; // 현재 요청된 숫자

        // 숫자 카드 맵에서 개수를 가져옴
        if (this.cardAndCount.has(num)) {
            // 숫자가 존재하면 개수를 추가
            results.push(this.cardAndCount.get(num));
        } else {
            // 숫자가 없으면 0을 추가
            results.push(0);
        }
    }

    // 모든 결과를 반환
    console.log(results.join(" "));
};

const Sangs_card = new Card();

let input = [];

rl.on('line', (line) => {
    input.push(line);

    if (input.length === 4) {
        let sangscards = input[1].split(' ').map(Number); // 상근이 가진 카드
        let request = input[3].split(' ').map(Number);

        Sangs_card.addCards(sangscards); 
        Sangs_card.inputnums(request);
        Sangs_card.printResult(); 

        rl.close();
    }
});