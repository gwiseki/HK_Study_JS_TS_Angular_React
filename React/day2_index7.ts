//여러개의 인자를 가진 함수를 함수마다 인자 하나씩 나누는 걸로 바꾸는 것을 커링이라고 함.
function foo7(a){
	return function(b){
		return function(c){
			return a + b + c;
		}
	}
}

///same function
//
const foo77 = a => b => c  => a + b + c; 