function foo(param){
    let words=param.split(" ").map(a=>a.toLowerCase())
    let wordsCollection={}

    for(let word of words){
        wordsCollection[word]=0
    } 

    for(let word of words){
        if(wordsCollection.hasOwnProperty(word)){
            wordsCollection[word]++
        }
    }
        
    
    let arr=Object.entries(wordsCollection)
    arr.sort((a,b)=>{return b[0].localeCompare(a[0])})

    for(let [word,count] of arr){
         if (count%2!=0&&count!=0) 
        console.log(word);
    }
}