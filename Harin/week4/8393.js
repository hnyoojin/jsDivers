const readline=require('readline');

const rl=readline.createInterface({ //기본 입력은 문자열로 받음
    input:process.stdin,
    output:process.stdout
});

function sum(number){
    let sum=0;
    for(let i=1;i<=number;i++)
        sum+=i;
    return sum;
};

//재귀함수 버전으로도 만들어봤어요
function sumRecursion(number){
    if(number<=0) return 0;
  //parseInt로 인수를 받지 않으면 아래 문장에서 number이 문자열로 취급되어 예측과 다른 결과 반환
    return number+sumRecursion(number-1);
};

rl.question('1000보다 작거나 같은 자연수 N을 입력하세요.\n',(N)=>{
   console.log(sum(N)); //여기에서는 for문이 받은 문자열 입력을 숫자로 처리
   console.log(sumRecursion(parseInt(N)));
   rl.close();
});
