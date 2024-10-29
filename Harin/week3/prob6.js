const fs=require('fs');

fs.readFile("prob6.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }
    else{
        const initInput=data.split('\n');
        const input=initInput[0].split(' ');
        let hour=parseInt(input[0]);
        const min=parseInt(input[1]);
        const cook=parseInt(initInput[1]);
        if(min+cook<60){
            console.log(`${hour} ${min+cook}`);
        }
        else if(min+cook>=60){
            let cookHour=Math.floor(cook/60);
            let cookMin=cook%60+min;
            if(cookMin>=60){
                if(hour+cookHour>=0&&hour+cookHour<23){
                    cookHour++;
                    cookMin-=60;
                }
                else if(hour+cookHour>=23){
                    hour=0;
                    cookMin-=60;
            }
            console.log(`${hour+cookHour} ${cookMin}`);
        }
    }
}})