function findNotSelfNum(N,arr){
    for(let i=1;i<=N;i++){
        let value=i;
        const splitedN=i.toString();
        for(let j=0;j<splitedN.length;j++){
            value+=parseInt(splitedN[j]);
        }
        if(value<=N)
            removeSelfNum(value,arr);
    }
    return arr;
};

function removeSelfNum(N,arr){
    const index=arr.indexOf(N);
    if (index !== -1) { //이 조건이 없고 바로 아래문장만 있으면 배열의 마지막 요소가 제거됨
        arr.splice(index, 1);
    }
}

const input=10000;
const arr=[];
for(let i=1;i<=input;i++){
    arr.push(i);
}
findNotSelfNum(input,arr);       

arr.sort((a,b)=>a-b);
for(let i=0;i<arr.length;i++)
    console.log(arr[i]);