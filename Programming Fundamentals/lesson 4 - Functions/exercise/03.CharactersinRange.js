function foo(n1,n2){
    let smallerCh=n1.charCodeAt()
    let biggerCh=n2.charCodeAt()
    
    if (biggerCh<smallerCh) {
        let tmp=smallerCh;
        smallerCh=biggerCh
        biggerCh=tmp
    }
    let arr=[]
    for (let i = smallerCh+1; i < biggerCh; i++) {
        arr.push(String.fromCharCode(i))
    }
    
    console.log(arr.join(" "));
    
 }