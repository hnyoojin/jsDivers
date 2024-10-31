const fs=require('fs');
const readline=require('readline');

const fileStream=fs.createReadStream('prob3.txt');

const rl=readline.createInterface({
    input:fileStream
});

rl.on('line',(line) =>{
    let sum=0, result, num=parseInt(line);
    for(let i=1;i<=num;i++)
        sum+=i;
    result=sum;
    console.log(`${result}`);
    rl.close();
});