// 독일 로또는 1-49에서 수 6개를 고른다.
// 로또 번호를 선택하는데 사용되는 가장 유명한 전략은 49가지 수 중 4(4>6)개의 수를 골라 집합 S를 만든 다음 그 수만 가지고 번호를 선택하는 것이다.
// 예를 들어 k=8, s={1,2,3,5,8,13,21,34}인 경우, 이 집합 S에서 수를 고를 수 있는 경우의 수는 총 28가지 이다.
// ([1,2,3,5,8,13], [1,2,3,5,8,21], [1,2,3,5,8,34], [1,2,3,5,13,21], ..., [3,5,8,13,21,34])
// 집합 S와 k가 주어졌을 때, 수를 고르는 모든 방법을 구하는 프로그램을 작성하시오.

// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있다. 첫 번째 수는 k (6 < k < 13)이고, 다음 k개 수는 집합 S에 포함되는 수이다. S의 원소는 오름차순으로 주어진다.
// 입력의 마지막 줄에는 0이 하나 주어진다.

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./6603').toString().trim().split('\n');

const results = [];

const getComb = (arr, size) => {
    const combinations = [];
    
    const backtrack = (start, currentComb) => {
        if (currentComb.length === size) {
            combinations.push([...currentComb]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            currentComb.push(arr[i]);
            backtrack(i + 1, currentComb);
            currentComb.pop();
        }
    };
    
    backtrack(0, []);
    return combinations;
};

for (let line of input) {
    if (line === '0') break;
    
    const [k, ...S] = line.split(' ').map(Number);
    const lottoCombs = getComb(S, 6);
    
    lottoCombs.forEach(comb => {
        results.push(comb.join(' '));
    });
    
    results.push('');
}

console.log(results.slice(0, -1).join('\n'));