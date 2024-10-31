const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('1000보다 작거나 같은 자연수 N을 입력하세요.\n',(N)=>{
    let arr=[];
   for(let i=1;i<=N;i++){
    let isItHansu=1;
    const value=i.toString();
    const dis=value[1]-value[0];
    for(let j=1;j<value.length-1;j++){
        if((value[i+1]-value[i])===dis)
            continue;
        else{
            isItHansu=0;
            break; 
        }
    }
    if(isItHansu==1)
        arr.push(value);
   }
   console.log(arr.length);
   rl.close();
});