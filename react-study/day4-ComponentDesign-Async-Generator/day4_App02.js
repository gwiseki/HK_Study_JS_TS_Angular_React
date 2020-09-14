import React from 'react';

const SessionItem = ({ title }) => (
    <li>{title}</li>
)

//const instanc = new ClassApp();

class ClassApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayOrder: 'ASC'
        }
    }
    /*
    onToogleDisplayOrder() {
        //아래this만 다른 this이다.
        //javascript는 문맥상 this가 바뀔 수 있음.
        this.setState({
            displayOrder: displayOrder === 'ASC' ? 'DESC' : 'ASC'
        });
        
    }
    */

    // Arrow function은 lexical context임.
    toggleDisplayOrder = () => {
        //그래서 아래 this는 편하게 ClassApp이 무조건 됨.
        this.setState({
            displayOrder: displayOrder === 'ASC' ? 'DESC' : 'ASC'
        });
        //이미 있는 객체가 render하는 개념.
        //그래서 class component가 상태를 가질 수 있게 됨.
        //함수 component는 상태를 갖는 것이 불가능.
        //함수 상태를 갖게 한것 -> react hook
    }

    render() {
        return (
            <div>
                여기여기
                <button onClick={ this.onToogleDisplayOrder }>정렬</button>
            </div>
        )
    }
}

const App = (props) => {
    //함수 component는 상태를 가질 수 없다
    //그걸 가능하게 한개 아래의 react hook
    const [displayOrder, toggleDisplayOrder] = React.useState('ASC');

    let displayOrder = 'ASC';
    const { sessionList } = props.store;
    const orderedSessionList = sessionList.map((session, i) => ({
        ...session,
        order: i
    }));

    //이런 함수가 있다고 해도
    // 렌더링 될 수가 없다
    // 화면 갱신이 안됨
    // VDOM이 다시 만들어지고, 그걸 다시 DOM에 업데이트 해야하는데
    // 다시 호출된다는 signal을 바깥쪽으로 줄 수가 없다
    const onToogleDisplayOrder= () => {
        toggleDisplayOrder(displayOrder === "ASC"  "DESC" : "ASC");
    }


    //console.log(sessionList, orderedSessionList);
    return (
        <div>
            <header>
                <h1>React and Typescript</h1>
            </header>
            <p>전체 세션 갯수: 4개</p>
            <button onClick = {toggleDisplayOrder}>재정렬</button>
            <ul>
                {
                    orderedSessionList.map((session) => (
                    <SessionItem title={session.title} />
                    ))
                }
            </ul>
        </div>
    );
};

export default App;

