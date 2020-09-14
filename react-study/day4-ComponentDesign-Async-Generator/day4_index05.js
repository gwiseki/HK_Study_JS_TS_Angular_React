function* makeNumber() {
    let num = 1;

    while(true){
        const x = yield num++;
        console.log(x);
    }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


// 이 함수만 따로 떼어놓고 보면 동기 코드로 보임
function* main(){
    console.log("시작");
    yield delay(3000);
    console.log('3초 뒤입니다');
}

const it = main();

//promise 객체 반환
const { value } = it.next();

value.then(() => {
    it.next();
})

//delay(3000).then(() => {
//    console.log('3초 뒤');
//})