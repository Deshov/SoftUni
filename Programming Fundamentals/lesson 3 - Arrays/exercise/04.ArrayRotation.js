function foo(arr,rotations){
    let newArr=[]
    
    if(rotations>arr.length){
         rotations-=arr.length
    }
 
    for (let i = 0; i < rotations; i++) {
         let currVal=arr.shift()
         arr.push(currVal)
    }
 
    console.log(arr.join(" "));
 }