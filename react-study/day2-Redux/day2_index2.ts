const foo2 = function foo() {
	foo();
};

const bar = x => x * 2;
//return을 생략하게끔 설계, 인자가 하나일때에는 괄호를 생략.