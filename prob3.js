//파일 실행 방법: 터미널 열기-해당 파일 있는 경로로 cd-node (파일 이름).js

const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('1보다 크고 4000보다 작은 연도를 입력해주세요: ', (answer)=>{
    const year=parseInt(answer);
    if(year%4==0&&(year%100!=0||year%400==0))
        console.log(1);
    else
        console.log(0);
    rl.close();
});