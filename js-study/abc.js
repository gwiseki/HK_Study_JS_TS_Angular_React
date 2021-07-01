function add(x, y) {
    return x + y;
  }
  
  function add2(x) {
    return add(x, 2); // `add`를 호출
  }
  
  function add2AndPrint(x) {
    const result = add2(x); // `add2`를 호출
    console.log(result); // `console.log`를 호출
  }
  
  add2AndPrint(3); // `add2AndPrint`를 호출