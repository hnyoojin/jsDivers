const fs=require('fs');

fs.readFile("10818.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }

    const line=data.split('\n');

    const numOfElem=parseInt(line[0]);
    const elem=line[1].split(' ');
    for(let i=0;i<numOfElem;i++){
        elem[i]=parseInt(elem[i]);
    }
    let max=elem[0];
    let min=elem[0];
        for(let i=1;i<numOfElem;i++){
            if(max<elem[i]){
                max=elem[i];
            }
            else if(min>elem[i]){
                min=elem[i];
            }
        }
    console.log(`${min} ${max}`);
})