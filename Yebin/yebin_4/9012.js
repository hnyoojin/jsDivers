//괄호 검사
//스택 형식으로..

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function Stack(){
    this.stack = [];
}

Stack.prototype.Push = function(element){
    this.stack.push(element);
}

Stack.prototype.Pop = function() {
    return this.stack.pop();
}

Stack.prototype.isEmpty = function() {
    return this.stack.length===0;
}

function Ps(strings){
    for(let string of strings){
        const stack = new Stack();
        let isPs = true;
        for(let char of string){
            if(char=='(')
                stack.Push(char);
            else { // )일 때
                if(stack.isEmpty()){
                    isPs=false;
                    break;
                }
                stack.Pop();
            }
                
        }
        if(!stack.isEmpty())
            isPs=false;
        console.log(isPs ? "Yes" : "No");
    }

}

let strings=[];

rl.question("",(num)=>{
    let count = parseInt(num);

    const getStrings = () =>{
        if(strings.length< count){
            rl.question("",(string)=>{
                strings.push(string);
                getStrings();
                //rl.question은 비동기적으로 동작해서..
                //재귀 호출을 콜백 내부에서 수행해야..함.
            })
        }else{
        rl.close();
        Ps(strings);
        }
    }
    getStrings();
})
