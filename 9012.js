function ReadFile(callback) {
    const fs = require('fs');

    fs.readFile("9012.txt", "utf8", (err, data) => {
        if (err) {
            console.error("에러 발생", err);
            return;
        }

        const lines = data.split('\r\n');
        const numOfElem=lines[0];
        const resultLines=lines.slice(1);
        callback({numOfElem,data: resultLines});
    });
};

function ParenStr() {
    this.numOfElem=null;
    this.data=null;
};

ParenStr.prototype.saveData = function(numOfElem, data) {
    this.numOfElem = numOfElem;
    this.data = data;
};

ParenStr.prototype.isVPS=function(callback) {
    if (!this.data) {
        callback(new Error("입력 데이터가 없습니다."));
        return;
    }

    //주어진 배열의 각 요소에 대해 순차적으로 처리하기 위해 forEach 메서드 사용
    this.data.forEach((elem)=>{
        //VPS 판별을 위한 stack 자료구조 활용
        //닫는 괄호가 등장하면 열린 괄호 삭제->순회 후 stack이 empty라면 VPS
        let stack=[];
        let isValid=true;

        for(let ch of elem){
            if(ch==='('){
                stack.push(ch);
            }
            else if(ch===')'){ 
                if(stack.length===0){ //닫는 괄호 이전에 push된 열린 괄호가 없는 경우->VPS 실패
                    isValid=false;
                    break;
                }
            stack.pop();
            }
        }
        if(stack.length>0)
            isValid=false;

        if(isValid==1)
            console.log('YES');
        else
            console.log('NO');
    });
};

ReadFile((data) => {
    const parenStr = new ParenStr();
    parenStr.saveData(data.numOfElem, data.data);

    parenStr.isVPS((err) => {
        if (err) {
            console.error(err.message);
        }
    });
});