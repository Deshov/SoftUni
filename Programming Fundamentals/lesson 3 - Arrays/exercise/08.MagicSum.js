function foo(array,sum){
    
    
    for (let i = 0; i < array.length; i++) {
       for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j]==sum)
                console.log(`${array[i]} ${array[j]}`);
            
       }
    }
 
   
   
 }