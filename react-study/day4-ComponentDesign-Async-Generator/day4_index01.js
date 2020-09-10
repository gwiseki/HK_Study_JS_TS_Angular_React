import React from "react";
import ReactDOM from "react-dom";
import App from "./day4_App01"

const rootElement = document.getElementsById("root");

const sessionList = [
    {title : '1회차: Overview'},
    {title : '2회차 :ㅁ'},
    {title : '3회차 :a'},
    {title : '4회차 : ㅁ'}
];

ReactDOM.render(
    <React.StrictMode>
        <App store={{ sessionList }} />
    </React.StrictMode>,
    rootElement
);