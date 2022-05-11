function foo (number,pow) {
    let res=1
    for (let index = 1; index <= pow; index++) {
        res*=number
    }
   
    console.log(`${res}`);
 }