function foo(arr,arr2){
    let output=[]
    for (let i = 0; i < arr.length; i++) {
         
         if(i%2==0){
              output.push(Number(arr[i])+Number(arr2[i]))
         }else{
              output.push(arr[i].toString()+arr2[i].toString())
         }
              
    }
    console.log(output.join(" - "));
}