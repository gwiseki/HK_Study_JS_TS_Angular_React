import { createStore} from "./redux";

functino reducer(state = { counter : 0}, action) {
    console.log('log =>', action.type);
    switch(action.type){
        case "inc" :
            return {
                ...state,
                counter: state.counter + 1
            };
        default :
            return { ...state };
    }
}


const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: "inc"
});

const myMiddleware = (store) => (dispatch) => (action) => {
    dispatch(action);
}

function yourMiddleware(store){
    return function(dispatch){
        return function(action){
            dispatch(action);
        }
    }
}

function ourMiddleware(store, dispatch, action){
    dispatch(action);
}


myMiddleware(store)(store.dispatch)({ type : "inc" });
ourMiddleware(store, store.dispatch, { type : 'inc' });

const add1 = function(a, b){
    return a + b;
}

const add2 = function(a) {
    return function(b){
        // 클로져에 있는 a
        return a + b;
    }
}

// 약간 다른 사용법, 약간 다른 구조 but 같은 동작
// add1은 이 함수를 호출하는 사용자 쪽에서 개입할 여지가 없음
// add2는 합쳐져서 결과가 반영되는 그 사이에 사용자가 개입할 여지가 있음
add1(10, 20);
add2(10)(20);

// 이런 조작이 가능 - 사용자 쪽에서 몽키패칭을 할 수 있는 구조라는 것
// 지연 평가 - JS에서 함수를 return함으로써 가능한 것
const next = add2(10);
// do something ...
next(20); // 이 함수의 사용자는 redux, redux가 중간에서 차곡차곡 빼놓고 끼워넣고 반환하겠다는 것
p
// middleware가 A, B, C, ... 있을 때
// middleware A가 리턴하면 B가 받아서.
// 하지만 실제로 B가 처리할 수는 없음
// 그래서 action을 넘겨주는 것