function foo(param){
    let book={}

     for(let person of param){
         let tokens= person.split(" ")
         book[tokens[0]]=tokens[1]
     }
     for(let key in book){
         console.log(key," -> ",book[key]);
     }
}