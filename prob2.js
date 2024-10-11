//파일 실행 방법: 터미널 열기-해당 파일 있는 경로로 cd-node (파일 이름).js

const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('0점에서 100점 사이의 점수를 입력해주세요: ', (answer)=>{
    const score=parseInt(answer);
    if(isNaN(score)||score<0||score>100){
        console.log('유효한 점수를 입력해주세요.');
    }
    else if (score>=90&&score<=100){
        console.log('A');
    }
    else if (score>=80){
        console.log('B');
    }
    else if (score>=70){
        console.log('C');
    }
    else if (score>=60){
        console.log('D');
    }
    else if(score<60&&score>=0){
        console.log('F');
    }
    rl.close();
});