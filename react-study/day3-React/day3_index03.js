import React from 'react';
import ReactDOM from 'react-dom';

function List(){
	return (
		<ul>
			<li>React></li>
			<li>Redux</li>
			<li>Typescript</li>
			<li>mobx</li>
		</ul>
	)
}

function App(){
	<div>
		<h1>Hello?</h1>
		<List />
	</div>
}
ReactDOM.render(<App />, document.getElementById("root"));