const fs=require('fs');

fs.readFile("prob5.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }
    else{
        const input=data.split(' ');
        const hour=parseInt(input[0]);
        const min=parseInt(input[1]);
        if(min>=45){
            console.log(`${hour} ${min-45}`);
        }
        else if(hour>=1&&min<45)
            console.log(`${hour-1} ${min+60-45}`);
        else
            console.log(`${24+hour-1} ${min+60-45}`);
    }
})