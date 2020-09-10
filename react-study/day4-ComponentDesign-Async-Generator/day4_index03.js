//함수인데 리턴을 여러번 할 수 있게하면 어떨까?
// 다음 리턴시 마지막 리턴한 부분에서 다시시작.

//generator
function* make(){
    return 1;
}

//iterator, coroutine
//C#에서 coroutine을 빡세게 사용합니다.
const i = make();

function xyz(x){
    //.........
}