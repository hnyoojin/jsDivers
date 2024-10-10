let input = prompt('2<=A, B, C<=10000을 만족하는 세 수 A, B, C를 차례대로 입력해주세요.\n입력 예시: 1 2 3');
let inputArray = input.split(" ");

const A = parseInt(inputArray[1][2]);
const B = parseInt(inputArray[1][1]);
const C = parseInt(inputArray[1][0]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);