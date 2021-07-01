import { createStore} from "./redux";

functino reducer(state = { counter : 0}, action) {
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

//middleware를 실제로 제작하게 될 일은 별로 없을 것이지만,
// 지연호출에 대한 개념을 이해하는데에 매우 도움.
// redux 공식문서를 보면 step by step으로 자세히 나와있음.
const myMiddleware = store => dispatch => action => {
    dispatch(action);
}

// 위의 mymiddleware와 똑같음
// closure 때문에 실행 가능(dispatch가 undefined일 수 있으나 그렇지 않음)
// ourMiddleware와 비교하면, 이것은 커링(함수쪼개기)
function yourMiddleware(store){
    return function(dispatch){
        return function(action){
            dispatch(action);
        }
    }
}

// 위의 두개와 실행 코드는 같지만
// 
function ourMiddleware(store, dispatch, action){
    dispatch(action);
}

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: "inc"
});