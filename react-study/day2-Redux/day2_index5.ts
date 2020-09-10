/////////////////closure
function foo5(){
	return bar5(){
	}
}

const f = foo5(); //f에는 bar가 오므로
f();// 이게 가능
/////////////////
const person5 = { age : 10};

function makePerson(){
	let age = 10;
	return {
		getAge(){
			return age;
		}
	}
}

let p = makePerson();