const fs=require('fs');
console.time('Execution Time');

fs.readFile("prob6.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }

    const line=data.split('\n');

    if(line.length>0) {//파일이 비어있는 경우를 대비하기 위함
        const numOfElem=parseInt(line[0]); //첫 줄: 배열의 첫 번째 원소
        for(let i=1;i<=numOfElem;i++){
            const elem=line[i].split(' ');
            const elem1=parseInt(elem[0]);
            const elem2=parseInt(elem[1]);
            console.log(`${elem1+elem2}`);
        }
    }
    console.timeEnd('Execution Time');
})