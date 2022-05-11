function foo(n1,n2,n3){
    let smallest=n1;
    
    [n1,n2,n3].forEach(x=>x<smallest?smallest=x:smallest);
    
    console.log(smallest);
}