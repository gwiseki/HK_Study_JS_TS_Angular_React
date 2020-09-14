import React from 'react';
import ReactDOM from 'react-dom';

function App(){
	return "<h1>1</h1>";
}
// JSX 문법이라 component가 태그처럼 되어있음
ReactDOM.render(<App />, document.getElementById("root") );