
/* @jsx createElement */

function createElement(type, props = {}, ...children) {
	if (typeof type === 'function') {
		return type.apply(null, [props, ...children]);
	}
	return { type, props, children }
}

function StudyList() {
	return (
		<ul>
			<li className="item" label="haha">React></li>
			<li className="item">Redux</li>
			<li className="item">Typescript</li>
			<li className="item">mobx</li>
		</ul>
	)
}

function App(){
	const vdom = createElement('ul', {}, createElement('li', {}, 'React')); //이런식으로 계속해서 써나가는 것.
	console.log(vdom);
	return(
		<div>
			<h1>Hello?</h1>
			<StudyList item="abcd" id="hoho"/>
		</div>
	);
}

console.log(<App />);

//ReactDOM.render(<App />, document.getElementById("root")); 
