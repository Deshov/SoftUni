function foo(count){
    let sum=0;
    let innercount=0;
    for (let index = 0; index <=100; index++) {
        
        if(index%2!=0){
        innercount++    
        console.log(index);
        sum+=index
        if(innercount==count)
        break
        }
     }
     console.log(`Sum: ${sum}`);
    }
    