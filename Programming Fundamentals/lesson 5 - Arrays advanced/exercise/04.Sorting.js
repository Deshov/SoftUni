function foo(param){
    let newArr=[]
 
   while (param.length>0) {
    newArr.push(param.sort((a,b)=>b-a).shift())
    newArr.push(param.sort((a,b)=>a-b).shift())
   }

   console.log(newArr.join(" "));

}