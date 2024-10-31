const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('별표를 출력할 줄 수 n을 입력하세요.\n',(n)=>{
    for(let i=0;i<n;i++){
        const result='*'.repeat(i+1);
        console.log(`${result}`);
    }
   rl.close();
});