console.log("name: ", named); // undefined
console.log("handle: ", handle); // undefined
console.log("getUser :", getUser); // [Function: getUser]
var named = "Tyler";
var handle = "@tylermcginnis";
function getUser() {
    return {
        name: named,
        handle: handle
    };
}
console.log("name: ", named); // Tyler
console.log("handle: ", handle); // @tylermcginnis
console.log("getUser :", getUser); // [Function: getUser]
console.log(getUser());
// setTimeout(() => {
// console.log("2 secs after setTimeout");
// }, 2000);
