let dN = [];

const sequence = () => {
    dN.push(1);
    let lastNum = 1;
    while (lastNum <= 10000) {
        let dN_1 = lastNum;
        let strNum = lastNum.toString();
        for (let i = 0; i < strNum.length; i++) {
            dN_1 += parseInt(strNum[i]);
        }
        if (dN_1 <= 10000) dN.push(dN_1);
        lastNum++;
    }
}

let selfNum = [];
selfNum.push(1);
const selfNumber = (dN) => {
    for (let i = 1; i <= 10000; i++) {
        if (!dN.includes(i))
            selfNum.push(i);
    }
}

sequence();
selfNumber(dN);
for (let i = 0; i < selfNum.length; i++)
    console.log(selfNum[i]);

