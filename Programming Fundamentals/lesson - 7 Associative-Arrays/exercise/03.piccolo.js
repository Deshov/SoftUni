function foo(param){
    let parking ={}
  
    for(let command of param){
        tokens=command.split(",")
        if(tokens[0]=="IN"){
            parking[tokens[1]]=0;
        }else{
            delete parking[tokens[1]]
        }
    }
    let arr=Object.keys(parking).sort()
    console.log(arr.join("\n"));
     
  }