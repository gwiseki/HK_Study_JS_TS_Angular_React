function* makeNumber() {
    let num = 1;

    while(true){
        const x = yield num++;
        console.log(x);
    }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//main()과 main2()는 거의 똑같게 동작
function* main(){
    console.log("시작");
    yield delay(3000);
    console.log('3초 뒤입니다');
}

async function main2(){
    console.log("시작");
    await delay(3000);
    console.log('3초 뒤입니다');
}

main2();

const it = main();
//async함수는 promise에 최적화돼있음(async일때만 await사용 가능)
//yield는 일반화(응용범위가 넓음)
//SAGA는 비동기일때만 쓸 수 있는게 아니다.
//async함수도 사실 generator로 구현돼있다(?)
//얽히고 설켜서 다양하게 응용됨
//비동기를 동기처럼 보이게 쓸 수 있는 응용이 가능


//promise 객체 반환
const { value } = it.next();

value.then(() => {
    it.next();
})

delay(3000).then(() => {
    console.log('3초 뒤');
})