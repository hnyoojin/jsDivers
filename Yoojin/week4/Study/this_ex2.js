// 생성자 함수
function Circle(radius) {
    // this는 생성자 함수가 생성할 인스턴스를 가리킴
    this.radius = radius;
}

Circle.prototype.getDiameter = function() {
    // this는 생성자 함수가 생성할 인스턴스를 가리킴
    return 2 * this.radius;
};

// 인스턴스 생성
// : 클래스나 생성자 함수로부터 생성된 각체
const circle = new Circle(5);
console.log(circle.getDiameter());