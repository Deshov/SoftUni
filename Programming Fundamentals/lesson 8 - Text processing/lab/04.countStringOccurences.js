function foo(string,word){
    let count=0
   for(let w of string.split(" ")){
     if (w==word) {
       count++
     }
   }
  
    console.log(count);
  }