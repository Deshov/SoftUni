function foo(param){
    let words=param.shift().split(" ")
    let wordsCollection={}

    for(let word of words){
       wordsCollection[word]=0
       }    
    for(let word of param){
        if(wordsCollection.hasOwnProperty(word)){
           wordsCollection[word]=wordsCollection[word]+1
        }
    }  
   let arr=Object.entries(wordsCollection)
   
    arr.sort((a,b)=>{return Number(b[1])-Number(a[1])})
   
    for(let res of arr){
        console.log(res[0],"-",res[1]);
    }
}