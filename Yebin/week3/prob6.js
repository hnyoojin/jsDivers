const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//rl.on()은 비동기적으로 입력을 처리함 주의!!
//->hour과 min을 함수 밖에서 선언
//hour과 min에 값이 저장되는 함수와 time에 값이 저장되는 함수 개별 -> 서로 다른 함수에서..
//따라서, var함수의 스코프 범위 밖이라고 할 수 
let hour, min;
rl.on("line",(input)=>{
  if(input.includes(' ')){
    let tmp = input.split(" ");
    hour = parseInt(tmp[0]);
    min = parseInt(tmp[1]);
  }
  else {
    var time = parseInt(input);
    rl.close();

    min = time%60 + min;
    hour = Math.floor(time/60) + hour;

    if(min>=60){
      min -=60;
      hour +=1;
    }
    if(hour>=24)
      hour-=24;

    console.log(hour, min);
    }
})
