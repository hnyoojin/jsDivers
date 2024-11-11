
function selfnumber(limit){
    let notselfnums = new Set();

    for(let i=0;i<=limit;i++){
        let sum = i;
        let num = i;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        notselfnums.add(sum);
    }
    let selfnums = new Set();
    for (let i = 1; i <= limit; i++) {
        if (!notselfnums.has(i)) {
            selfnums.add(i); 
        }
    }
    for(let value of selfnums){
        console.log(value);
    }
}

selfnumber(10000);