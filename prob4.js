const fs=require('fs');

fs.readFile("prob4.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }

    const line=data.split('\n');

    if(line.length>0) {//파일이 비어있는 경우를 대비하기 위함
        const price=parseInt(line[0]);
        const num=parseInt(line[1]);
        let sum=0;
        for(let i=2;i<=num+1;i++){
            const goods=line[i].split(' ');
            sum+=parseInt(goods[0])*parseInt(goods[1]);
        }
        sum===price?console.log('Yes'):console.log('No');
    }
})