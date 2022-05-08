function foo(array){
    let outpu=[];
      for (let i = 0; i < array.length; i++) {
           let bestVal=true
           for (let j = i+1; j < array.length; j++) {
                if(array[i]<=array[j]){
                     bestVal=false
                }
              
           }
           if(bestVal)
             outpu.push(array[i])  
      }
   
      console.log(outpu.join(" "));
   }