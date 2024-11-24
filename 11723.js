const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function SetOperations() {
    this.set = [];
}

SetOperations.prototype.add = function(x) {
    if (!this.set.includes(x)) {
        this.set.push(x);
    }
};

SetOperations.prototype.remove = function(x) {
    const index = this.set.indexOf(x);
    if (index !== -1) {
        this.set.splice(index, 1);
    }
};

SetOperations.prototype.check = function(x) {
    console.log(this.set.includes(x) ? 1 : 0);
};

SetOperations.prototype.toggle = function(x) {
    const index = this.set.indexOf(x);
    if (index === -1) {
        this.set.push(x);
    } else {
        this.set.splice(index, 1); 
    }
};

SetOperations.prototype.all = function() {
    this.set = Array.from({length: 20}, (_, i) => i + 1); 
};

SetOperations.prototype.empty = function() {
    this.set = [];
};

//readline 함수를 async/await 패턴으로 처리
const rlSync = () => {
    return new Promise((resolve) => {
        rl.question('', resolve);
    });
};

async function ConsoleHandler() {
    const M = parseInt(await rlSync()); 
    const setOps = new SetOperations();

    for (let i = 0; i < M; i++) {
        const operation = (await rlSync()).split(" ");
        const command = operation[0];
        const x = parseInt(operation[1]);

        switch (command) {
            case "add":
                setOps.add(x);
                break;
            case "remove":
                setOps.remove(x);
                break;
            case "check":
                setOps.check(x);
                break;
            case "toggle":
                setOps.toggle(x);
                break;
            case "all":
                setOps.all();
                break;
            case "empty":
                setOps.empty();
                break;
        }
    }

    rl.close();
}

ConsoleHandler();
