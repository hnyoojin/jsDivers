const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question('합을 출력할 정수 쌍의 개수를 입력하세요.\n',(number)=>{
    console.log('두 정수 A(>0), B(<10)를 공백으로 구분하여 입력해주세요.');
    
    function askQuestion(i){
        if(i>=number){
            rl.close();
            return;
        }
    
    rl.question('',(answer)=>{ //비동기 함수로 루프 내 바로 사용 불가->선언 후 재귀 호출
        const elem=answer.split(' ');
        console.log(`Case #${i+1}: ${parseInt(elem[0])+parseInt(elem[1])}`);
        askQuestion(i+1);
    });
    }

    askQuestion(0);
});