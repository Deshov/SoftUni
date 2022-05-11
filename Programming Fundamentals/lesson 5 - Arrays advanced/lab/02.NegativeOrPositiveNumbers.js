function foo(param){
    let output=[]
  for(number of param){
      if(Number(number)<0){
        output.unshift(Number(number))
      }else{
        output.push(Number(number))
      }
  }
  for(a of output){
      console.log(a);
  }
}