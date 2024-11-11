// 전역에서 this는 전역 객체 window를 가리킨다.
// (전역 객체란 최상위 객체를 말학, 브라우저에서는 window지만 node.js에서는 global 임!)
console.log(this);

function square(number) {
    // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    // 어라 그럼 전역객체 wundow를 가리키지 않는 경우는 어디 내부에 있을 때지??
    console.log(this);
    return number * number;
}
square(2);

const person = {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    name: 'Hwang',
    getName() {
        console.log(this);
        return this.name;
    }
};
console.log(person.getName());

function Person(name) {
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    console.log(this);
}

const me = new Person('Lee');