function* makeNumber() {
    let num = 1;

    while(true){
        const x = yield num++;
        console.log(x);
    }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

const { value } = it.next();

//promise를 반환하는지 아닌지 모를 때
if(value instanceof Promise){
    value.then(() => {
        it.next();
    });
}

value.then(() => {
    it.next();
})

delay(3000).then(() => {
    console.log('3초 뒤');
})