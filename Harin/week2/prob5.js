const input=prompt('A(A>0), B(B<10)를 입력하세요');
let inputArray=input.split(" ");

const A=parseInt(inputArray[0])*1.0;
const B=parseInt(inputArray[1])*1.0;

console.log(A/B);