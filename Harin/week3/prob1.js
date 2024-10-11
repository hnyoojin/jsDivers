const fs=require('fs');

fs.readFile("C:/Users/chika/OneDrive/바탕 화면/private/JSDive/Conditional/prob1.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }
    else{
        const input=data.split(" ");
        const num1=parseInt(input[0]);
        const num2=parseInt(input[1]);
        num1==num2?console.log('=='):(num1>num2?console.log('>'):console.log('<'));
    }
})