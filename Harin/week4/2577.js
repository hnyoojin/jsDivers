const fs=require('fs');

fs.readFile("2577.txt",'utf8',(err,data)=>{
    if(err){
        console.error('파일을 읽는 중 에러가 발생했습니다.',err);
        return;
    }

    const line=data.split('\n');
    const result=(parseInt(line[0])*parseInt(line[1])*parseInt(line[2])).toString();
    
    const count = Array(10).fill(0);
    for (let i = 0; i < result.length; i++) {
        const value = parseInt(result[i]);
        if (value >= 0 && value <= 9) {
            count[value]++;
        }
    }
    for (let i = 0; i < count.length; i++) {
        console.log(`${count[i]}`);
    }
})