//구구단 출력 문제
const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('구구단을 출력할 1~9 중 하나의 정수를 입력하세요.\n',(number)=>{
   for(let i=1;i<10;i++){
    console.log(`${number} * ${i} = ${number*i}`);
   } 
   rl.close();
});