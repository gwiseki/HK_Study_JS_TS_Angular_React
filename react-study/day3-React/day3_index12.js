
/* @jsx createElement */

/*
const ul = document.createElemtn('ul');

document.body.appendChild(ul);
이걸 코드로 만드는 것
*/
// 이 코드는 침착하게 보시오 한줄씩.
function renderElement(node){ //재귀일 수 밖에 없음. vdom도 결국 tree이므로.

	if (typeof node === "string") {
		return document.createTextNode(node);
	}

	const el = document.createElement(node.type);

	node.children.map(renderElement).forEach(element => {
		el.appendChild(element);
	}); 
	return el; // element를 만든 수 return하면 appendChild로 감
}

function render(vdom, container) {
	container.appendChild( renderElement(vdom)/*realdom return*/);
}

function createElement(type, props = {}, ...children) {
	if (typeof type === 'function') {
		return type.apply(null, [props, ...children]);
	}
	return { type, props, children }
}

function Row(props) {
	return <li>{ props.label}></li>
}

function StudyList() {
	return (
		<ul>
			<Row label="hahaha hmmmm" />
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
render(<App />, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById("root")); 