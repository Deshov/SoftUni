function foo(param){
    let result={
        
    }

     for(let line of param){
         let tokens= line.split(" ")
         let item = tokens[0]        
         let qty = Number(tokens[1])
         
         if (result.hasOwnProperty(item)) {
            result[item]=result[item]+qty
         }else{
            result[item]=qty
         }
     }
     
    

    for(let entrie in result){
        console.log(entrie,"->",result[entrie]);
    }
}