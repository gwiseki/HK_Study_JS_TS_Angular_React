import React from 'react';

const SessionItem = ({ title }) => (
    <li>{title}</li>
)

const App = (props) => {
    const { sessionList } = props.store;

    return (
        <div>
            <header>
                <h1>React and Typescript</h1>
            </header>
            <ul>
                {
                    sessionList.map((session) => (
                    //<li>{session.title}</li>
                    <SessionItem title={session.title} />
                    ))
                }
            </ul>
        </div>
    );
};

export default App;

// 코드에서 아키텍쳐를 잡는 것은 중요.
// 좋은 코드로 가는 %를 많이 차지하는 일 : 쪼개기 - 언제쪼개나? 
// 더 비대해지기 전에, 쪼개도 눈에 훤히 보일때
