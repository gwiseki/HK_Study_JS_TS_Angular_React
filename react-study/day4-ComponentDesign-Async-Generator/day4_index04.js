//generator

function* makeNumber() {
    let num = 1;

    //일반 함수에서는 무한루프를 돌다가 죽을 것
    while(true){
        // yield : generator 안의 return이라고 생각하면 됨
        // but 함수를 끝내지는 않는다
        // 잠깐 멈추고 함수 안의 모든 상태를 보존
        const x = yield num++;
        console.log(x);
    }
}

//  함수 안팎으로 소통하는 느낌
const i = makeNumber();

console.log(i.next()); /// Object {value: 1, done: false}
console.log(i.next());
console.log(i.next());