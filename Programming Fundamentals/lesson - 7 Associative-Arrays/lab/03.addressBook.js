function foo(param){
    let result={
        
    }

     for(let line of param){
         let [person,address]= line.split(":")
         result[person]=address        
     }
     
    let entries=Object.entries(result)
    entries.sort((a,b)=>{
        return a[0].localeCompare(b[0])
    })

    for(let entrie of entries){
        console.log(entrie[0],"->",entrie[1]);
    }
}