function addAndRemove(arr) {
    let counter=0;
    let output=[]
    for(let command of arr){
        counter++
        if(command=="add"){
            
            output.push(counter)
        }else{
            if(output.length>0){
                output.pop()
            }
        }
    }
    if(output.length>0){
       output.forEach(el=>console.log(el)) 
    }else{
        console.log("Empty");
    }
}

addAndRemove([
'remove']

)