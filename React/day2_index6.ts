setTimeout(function(x) {
	console.log('앗싸');
	setTimeout(function(y){
		console.log('웃싸');
	}, 2000)
}, 1000);

const p1 = new Promise((resolve, reject) => {

	setTimeout(()=> {
		resolve('응답1');
	}, 1000);
	//reject();
});
const p2 = new Promise((resolve, reject) => {

	setTimeout(()=> {
		resolve('응답2');
	}, 1000);
	//reject();
});


p1.then(function() {

}).catch(function(){});


p1.then(p2)
	.then(function(r){
		console.log(r);
	})
	.catch(function(){});