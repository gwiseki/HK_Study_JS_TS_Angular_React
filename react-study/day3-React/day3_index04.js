
import React from 'react';
import ReactDOM from 'react-dom';

//List -> StudyList로 바꾸는 순간 의미가 부여되므로, 이름을 줄 수 있다는 것은 굉장히 중요한 의미임. 읽기쉬워진다. 읽기 쉬워지면 고치기 쉬워진다. 
function StudyList(){
	return (
		<ul>
			<li className="item">React></li>
			<li className="item">Redux</li>
			<li className="item">Typescript</li>
			<li className="item">mobx</li>
		</ul>
	)
}

function App(){
	<div>
		<h1>Hello?</h1>
		<StudyList />
	</div>
}

ReactDOM.render(<App />, document.getElementById("root")); 
//이런 태그들을(문자열들을) JS에서 가장 다루기 쉬운 객체로 바꾼다.