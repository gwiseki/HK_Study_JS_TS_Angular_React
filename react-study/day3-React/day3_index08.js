
import React from 'react';
import ReactDOM from 'react-dom';

const vdom = {
	type: 'ul',
	props: { },
	children: [
		{type: 'li', props: { className: "item" }, children: "React"},
		{type: 'li', props: { className: "item" }, children: "Redux"},
		{type: 'li', props: { className: "item" }, children: "Typescript"},
		{type: 'li', props: { className: "item" }, children: "mobx"}
	]
};


function createElement(type, props = {}, ...children) {
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

ReactDOM.render(<App />, document.getElementById("root")); 