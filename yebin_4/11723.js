const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function Set(){
    this.set = [];
}

Set.prototype.add = function(x){
    if(!this.set.includes(x)){
        this.set.push(x);
    }
}

Set.prototype.remove = function(x) {
    let i = this.set.indexOf(x);
    if(i!==-1){
        this.set.splice(i,1);
    }
}

Set.prototype.check = function(x) {
    if(this.set.includes(x)){
        return 1;
    }
    else return 0;
}

Set.prototype.toggle = function(x) {
    let i = this.set.indexOf(x);
    if(i===-1){
        this.set.push(x);
    }
    else this.set.splice(i,1);
}

Set.prototype.all = function() {
    this.empty();
    for(let i=1;i<21;i++)
        this.set.push(i);
}

Set.prototype.empty = function() {
    this.set = [];
}

let linecount=0;

rl.question("",(num)=>{
    const MySet = new Set();
    let count = parseInt(num);

    const lines = () =>{
        if(linecount< count){
            rl.question("",(line)=>{
                let input = line.split(" ");
                let command = input[0];
                let x = parseInt(input[1]);
                let result;

                switch(command){
                    case "add":
                        MySet.add(x);
                        break;
                    case "remove":
                        MySet.remove(x);
                        break;
                    case "check":
                        result = MySet.check(x);
                        console.log(result);
                        break;
                    case "toggle":
                        MySet.toggle(x);
                        break;
                    case "all":
                        MySet.all();
                        break;
                    case "empty":
                        MySet.empty();
                        break;
                }
                linecount++;
                lines();
            })
        }else{
        rl.close();
        }
    }
    lines();
})