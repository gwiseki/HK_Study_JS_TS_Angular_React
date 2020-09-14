//React가 딱 이렇게 생김.
import React from 'react';
import ReactDOM from 'react-dom';

//vdom은 이렇게 생겼을 거임. 자식은 n개 가지고 있음.
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

//react가 뭐 대단한 기술이 있어서, 상태로만 데이터를 받는게 아님.
//자식요소는 당연히 n개이거나 없거나 일 수 밖에 없음
// 이게 여러개로 중첩도가 깊고 많을 뿐
// 최상위에 단 하나의 부모 component가 있을 수 밖에 없는 구조
// 그래서 react는 vdom이 단 하나밖에 있을 수 밖에 없는 구조. vdom은 의외로 간단하다.