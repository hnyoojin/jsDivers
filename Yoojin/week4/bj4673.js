// 양의 정수 n
// d(n) : n과 n의 각 자리수를 더하는 함수
// d(75) = 75+7+5 = 87
// -> 이러면 75가 87의 생성자가 됨
// -> 생성자가 없는 수를 셀프 넘버라고 함
// n, d(n), d(d(n)), d(d(d(n))), ... 해서 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램

const arr = Array(10000).fill(0);

// 1-10000 배열
for (let i = 0; i < 10000; i++) {
    arr[i] = i+1;
}

// 한수 함수
const d = (n) => {
    let result = n;
    
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n/10);
    }
    return result;
}

// 메인 loop
for (let i = 1; i <= 10000; i++) {
    const dn = d(i);
    if (dn <= 10000) {
        arr[dn-1] = 0;
    }
}

// 출력
for (let i = 0; i < 10000; i++) {
    if (arr[i] !== 0) 
        console.log(arr[i]);
}