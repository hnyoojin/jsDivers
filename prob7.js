const fs=require('fs');

fs.readFile("prob7.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }
    else{
        const input=data.split(" ");
        const num1=parseInt(input[0]);
        const num2=parseInt(input[1]);
        const num3=parseInt(input[2]);
        if(num1==num2&&num2==num3){
            const prize=10000+num1*1000;
            console.log(prize);
        }
        else if(num1==num2||num2==num3||num3==num1){
            let sameNum;
            num1==num2?sameNum=num1:sameNum=num3;
            const prize=1000+sameNum*100;
            console.log(prize);
        }
        else{
            let max=num1;
            for(let i=1;i<3;i++){
                if(max<input[i])
                    max=input[i];
            }
            const prize=max*100;
            console.log(prize);
        }
    }
})