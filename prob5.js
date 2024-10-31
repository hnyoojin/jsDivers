const fs=require('fs');
const readline=require('readline');

const fileStream=fs.createReadStream('prob5.txt');

const rl=readline.createInterface({
    input:fileStream
});

rl.on('line',(line) =>{
    let num=parseInt(line);
    for(let i=0;i<num/4;i++)
        process.stdout.write('long '); //줄바꿈 없이 출력
    console.log('int');
    rl.close();
});