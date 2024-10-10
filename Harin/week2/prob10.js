let input = prompt('곱셈을 계산할 세 자리 수 두 개를 차례대로 입력해주세요.\n입력 예시: 123 456');
let inputArray = input.split(" ");

let A=parseInt(inputArray[0]);

let oneP=A*parseInt(inputArray[1][2]);
let tenP=A*parseInt(inputArray[1][1]);
let hundP=A*parseInt(inputArray[1][0]);
console.log(oneP);
console.log(tenP);
console.log(hundP);
console.log(oneP+10*tenP+100*hundP);