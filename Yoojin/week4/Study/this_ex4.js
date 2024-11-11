var a = 10;
console.log(window.a);
console.log(this.a);

// 브라우저에서는, var로 선언한 변수는 전역 객체의 속성이 된다.
// 그렇기 때문에 전역에서의 window.a와 this.a는 같은 값을 가진다.
// let이나 const로 선언된 변수는 window 객체의 속성이 아니기 때문에 this.a로는 접근이 불가능하다.
// var로 선언된 변수만 전역 객체의 속성으로 포함됨.

// 근데 또 node.js에서는, global 객체가 전역 객체이긴 하지만, 파일 내에서 선언한 변수는 해당 파일(모듈 범위)에서만 유효함
// var, let, const로 선언된 변수는 모듈 스코프에 속하고, global 객체의 속성으로 추가되지 않는다.
// 그래서 
var a = 10;
console.log(global.a); 
// 를 해도 undefined가 출력됨.
// 변수를 global 객체에 추가하고 싶다면, 다음과 같이 추가해얗마

global.a = 10;
console.log(global.a);