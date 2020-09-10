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


function StudyList() {
	// vdom 객체를 만드는 역할. 
	// 언제 화면에 붙일 까? render할 때(붙일 때) render는 vdom안의 내용을 계속 쫓아가면서 component로(?) 만드는 역할.
	React.createElement('ul', { }); 
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
	return(
		<div>
			<h1>Hello?</h1>
			<StudyList item="abcd" id="hoho"/>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root")); 