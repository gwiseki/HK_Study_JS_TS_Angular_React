import React from "react";
import ReactDOM from "react-dom";
import App from "./day4_App02"

const rootElement = document.getElementsById("root");

const sessionList = [
    {title : '1회차: Overview'},
    {title : '2회차 :Redux만들기'},
    {title : '3회차 :React만들기'},
    {title : '4회차 :컴포넌트 디자인 및 비동기'}
];

ReactDOM.render(
    <React.StrictMode>
        <App store={{ sessionList }} />
    </React.StrictMode>,
    rootElement
);