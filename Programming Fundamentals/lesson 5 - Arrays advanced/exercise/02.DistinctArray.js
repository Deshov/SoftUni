function foo(param){
    let output=[]

    for (let i = 0; i <param.length; i++) {
       if(!output.includes(param[i])){
           output.push(param[i])
       }
       
    }

    console.log(output.join(" "));
}