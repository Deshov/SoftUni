function foo(n1,n2,n3){
   
    let sum=function(val1, val2){
        return val1+val2
    }
     
    let substract=function(val1,val2){
        return val1-val2
    }

    let output=substract(sum(n1,n2),n3)
    console.log(output);
}