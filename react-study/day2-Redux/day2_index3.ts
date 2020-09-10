function foo3() {
	this.name = 10; // 동적 바인딩(인자를 먼저 선언하지 않아도 쓰기)
}
const y3 = new foo3(); // 인스턴스 객체 -> prototype? 이라고 한다고 함.
if(y3 instanceof foo3) { } // 이런식으로 instanceof 연산자를 이용해 foo함수가 만든 객체인지 확인 가능.

//동일한 문법
class bar3 {
	constructor(){
		this.name = 10;
	}
}
console.log(new bar3());