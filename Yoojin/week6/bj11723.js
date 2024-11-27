// 비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다.

// 첫째 줄에 수행해야 하는 연산의 수 M (1 ≤ M ≤ 3,000,000)이 주어진다.
// 둘째 줄부터 M개의 줄에 수행해야 하는 연산이 한 줄에 하나씩 주어진다.

// check 연산이 주어질때마다, 결과를 출력한다.

let fs = require('fs');
let input = fs.readFileSync('./11723').toString().trim().split('\n');

const M = parseInt(input[0]); // 명령의 개수
const results = [];

// 초기 집합 (비트마스크)
let S = 0;

for (let i = 1; i <= M; i++) {
    const [operation, x] = input[i].split(' ').map((val, idx) => idx === 1 ? parseInt(val) : val);

    switch (operation) {
        case 'add':
            if (x >= 1 && x <= 20) S |= (1 << (x - 1));
            break;

        case 'remove':
            if (x >= 1 && x <= 20) S &= ~(1 << (x - 1));
            break;

        case 'check':
            if (x >= 1 && x <= 20) results.push(S & (1 << (x - 1)) ? 1 : 0);
            break;

        case 'toggle':
            if (x >= 1 && x <= 20) S ^= (1 << (x - 1));
            break;

        case 'all':
            S = (1 << 20) - 1; // 1부터 20까지 모두 포함
            break;

        case 'empty':
            S = 0; // 공집합
            break;
    }
}

// check 연산 결과 출력
console.log(results.join('\n'));
