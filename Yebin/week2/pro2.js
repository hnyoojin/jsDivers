//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

/** fs 모듈을 사용, fs.readFileSync("/dev/stdin") 이것을 이용해 
 * 문제를 풀려고 하였으나 윈도우 환경에서는 "/dev/stdin" 사용 불가한 듯함
 */

// readline 모듈 사용
const readline = require("readline");
// 아래 const rl = ~코드는 readline 모듈을 사용할 때
//기본적으로 필요로 하는 코드
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("",(input)=>{
    var inputs = input.split(' ');
    var A = parseInt(inputs[0]);
    var B = parseInt(inputs[1]);
    rl.close(); // 입력 완료시 닫아야 함
    console.log(A+B);
})

/**질문이 없으면 rl.on('line', (input) => {})으로 대체 가능 */

/**브라우저 환경이라면
 * var input = prompt().split 
 * var A = input[0];
 * var B = input[1];
 * 이렇게도 가능할 것...?
 * */