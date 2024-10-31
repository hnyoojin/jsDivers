const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('별표를 출력할 줄 수 n을 입력하세요.\n',(n)=>{
    for(let i=n;i>0;i--){
        const space=' '.repeat(i-1);
        const astr='*'.repeat(n-i+1);
        console.log(`${space}${astr}`);
    }
   rl.close();
});