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


//이건 번거로움
console.log('log => ', 'inc');
myMiddleware(store)(store.dispatch)({ type : "inc" });

console.log('log => ', 'inc');
ourMiddleware(store, store.dispatch, { type : 'inc' });


// 코드를 수정하는 것은 비싼 비용
// 코드를 수정하지 않고 하는 테크닉을 연구
// 몽키패칭