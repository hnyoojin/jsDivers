const fs=require('fs');

fs.readFile("prob4.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }
    else{
        const input=data.split('\n');
        const x=parseInt(input[0]);
        const y=parseInt(input[1]);
        if(x>0&&y>0)
            console.log(1);
        else if(x<0&&y>0)
            console.log(2);
        else if(x<0&&y<0)
            console.log(3);
        else if(x>0&&y<0)
            console.log(4);
        else
            console.log('사분면에 속해있지 않습니다.');
    }
})