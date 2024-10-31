const fs=require('fs');

fs.readFile("prob11.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }

    const line=data.split('\n');
    let i=0;

        while(line.length!=i){
            const elem=line[i].split(' ');
            const elem1=parseInt(elem[0]);
            const elem2=parseInt(elem[1]);
            if(elem1==0 || elem2==0)
                break;
            console.log(`${elem1+elem2}`);
            i++;
        }
    }
);