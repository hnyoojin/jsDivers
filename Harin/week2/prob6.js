const input = prompt('A(A>=1), B(B<=10000)를 입력하세요');
let inputArray = input.split(" ");

const A = parseInt(inputArray[0]);
const B = parseInt(inputArray[1]);


console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B);