function foo(arrLength,k){
   
    let output=[1]

    for (let i = 1; i < arrLength; i++) {
      let tmpArr=output.slice(-k)
      let numb=0;
      tmpArr.forEach(el=>numb+=el)
      output.push(numb)
        
    }

   console.log(output.join(" "));
}
 