function lastKnumbSimb(n,k) {
    let arr=[1]
    let sum=0
    for (let i = 1; i < n; i++) {
       for (let j = 1; j <=k; j++) {
        if((i-j)>=0){

            sum+=arr[i-j]     
        }  
       }
       arr.push(sum)
        sum=0
    }
    console.log(arr);
}

lastKnumbSimb(6,3)