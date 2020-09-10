function foo(x) {
	x();
	return function (){
	};
}
const y = foo(function (){ });