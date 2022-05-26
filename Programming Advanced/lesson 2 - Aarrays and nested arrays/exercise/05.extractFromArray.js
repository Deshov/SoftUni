function extract(arr){
    let output=[]
    let biggest=arr[0]
    for(let numb of arr){
        if(numb >= biggest)
        {    output.push(numb)
            biggest=numb}
    }
    return output
}

extract([1, 
    3, 
    8, 
    4,10, 
    12, 
    3, 
    2, 
    24]
     
    )