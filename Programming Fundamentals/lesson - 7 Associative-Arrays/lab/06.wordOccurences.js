
function foo(param){
    let words={}
  
    for(let word of param){
      if(!words[word]){
        words[word]=1
      }else{
        words[word]++
      }
    }
  
    let res=Object.entries(words).sort((a,b)=>{return b[1]-a[1]})
    
    for(let a of res){
      console.log(`${a[0]} -> ${a[1]} times`);
    }
  }
   