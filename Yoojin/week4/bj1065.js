// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.


let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./1065').toString().trim();

const n = parseInt(input);
let result = 0;

const isArithSeq=(num)=> {
    const arr = String(num).split('').map(Number);
    if (arr.length <= 2) 
        return true;

    let diff = arr[0] - arr[1];
    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i] - arr[i+1] !== diff)
            return false;
    }
    return true;
}

for (let i=1; i<=n; i++){
    if (isArithSeq(i))
        result++;
}
console.log(result);